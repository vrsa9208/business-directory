import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  fetchBusiness,
  createBusiness,
} from "../../redux/actions/businessActions";
import BusinessTable from "../../components/BusinessTable/BusinessTable";
import BusinessUpdateDialog from "../../components/BusinessUpdateDialog/BusinessUpdateDialog";
import BusinessTableActions from "../../components/BusinessTableActions/BusinessTableActions";

const BusinessList = ({ business, fetchBusiness, createBusiness }) => {
  const { t } = useTranslation();

  useEffect(() => {
    fetchBusiness();
  }, [fetchBusiness]);

  const [searchFilter, setSearchFilter] = useState("");
  const [dialogOptions, setDialogOptions] = useState({
    open: false,
  });

  const handleSearchFilterChange = (filter) => {
    setSearchFilter(filter);
  };

  const handleCreatBusinessButtonClick = () => {
    setDialogOptions({
      open: true,
      title: t("businessList.create"),
      onCancel: closeDialog,
      onSubmit: startBusinessCreation,
    });
  };

  const startBusinessCreation = (name) => {
    closeDialog();
    createBusiness(name);
  };

  const startBusinessDeletion = (businessId) => {};

  const closeDialog = () => {
    setDialogOptions({ open: false });
  };

  const filteredBusiness = business.filter((b) =>
    b.name.toUpperCase().includes(searchFilter.toUpperCase())
  );

  return (
    <>
      <BusinessUpdateDialog {...dialogOptions} />
      <BusinessTableActions
        onSearchFilterChange={handleSearchFilterChange}
        onCreateBusinessButtonClick={handleCreatBusinessButtonClick}
      />
      <BusinessTable data={filteredBusiness} />
    </>
  );
};

const mapStateToProps = (state) => ({
  business: state.business.data,
});

const mapDispatchToProps = {
  fetchBusiness,
  createBusiness,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
