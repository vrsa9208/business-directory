import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  fetchBusiness,
  createBusiness,
  deleteBusiness,
  editBusiness,
} from "../../redux/actions/businessActions";
import BusinessTable from "../../components/BusinessTable/BusinessTable";
import BusinessUpdateDialog from "../../components/BusinessUpdateDialog/BusinessUpdateDialog";
import BusinessTableActions from "../../components/BusinessTableActions/BusinessTableActions";
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog";

const BusinessList = ({
  business,
  fetchBusiness,
  createBusiness,
  deleteBusiness,
  editBusiness,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    fetchBusiness();
  }, [fetchBusiness]);

  const [searchFilter, setSearchFilter] = useState("");
  const [updateDialogOptions, setUpdateDialogOptions] = useState({
    open: false,
  });
  const [confirmationDialogOptions, setConfirmationDialogOptions] = useState({
    open: false,
  });

  const handleSearchFilterChange = (filter) => {
    setSearchFilter(filter);
  };

  const handleCreateButtonClick = () => {
    setUpdateDialogOptions({
      open: true,
      title: t("businessList.create"),
      onCancel: closeUpdateDialog,
      onSubmit: startBusinessCreation,
    });
  };

  const handleDeleteButtonClick = (business) => {
    setConfirmationDialogOptions({
      open: true,
      title: t("businessList.delete"),
      description: t("businessList.deleteDescription"),
      onCancel: closeConfirmationDialog,
      onSubmit: () => startBusinessDeletion(business.businessId),
    });
  };

  const handleEditButtonClick = (business) => {
    setUpdateDialogOptions({
      open: true,
      title: t("businessList.edit"),
      initialName: business.name,
      onCancel: closeUpdateDialog,
      onSubmit: (name) => startBusinessEdit(name, business.businessId),
    });
  };

  const startBusinessEdit = (name, businessId) => {
    closeUpdateDialog();
    editBusiness(name, businessId);
  };

  const startBusinessDeletion = (businessId) => {
    closeConfirmationDialog();
    deleteBusiness(businessId);
  };

  const startBusinessCreation = (name) => {
    closeUpdateDialog();
    createBusiness(name);
  };

  const closeUpdateDialog = () => {
    setUpdateDialogOptions({ open: false });
  };

  const closeConfirmationDialog = () => {
    setConfirmationDialogOptions({ open: false });
  };

  const filteredBusiness = business.filter((b) =>
    b.name.toUpperCase().includes(searchFilter.toUpperCase())
  );

  return (
    <>
      {confirmationDialogOptions.open && (
        <ConfirmationDialog {...confirmationDialogOptions} />
      )}
      {updateDialogOptions.open && (
        <BusinessUpdateDialog {...updateDialogOptions} />
      )}
      <BusinessTableActions
        onSearchFilterChange={handleSearchFilterChange}
        onCreateButtonClick={handleCreateButtonClick}
      />
      <BusinessTable
        data={filteredBusiness}
        onDeleteButtonClick={handleDeleteButtonClick}
        onEditButtonClick={handleEditButtonClick}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  business: state.business.data,
});

const mapDispatchToProps = {
  fetchBusiness,
  createBusiness,
  deleteBusiness,
  editBusiness,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
