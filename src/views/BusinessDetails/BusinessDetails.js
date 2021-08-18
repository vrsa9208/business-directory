import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getBusiness } from "../../redux/actions/businessActions";
import {
  fetchPersons,
  createPerson,
  deletePerson,
  editPerson,
} from "../../redux/actions/personsActions";
import { useTranslation } from "react-i18next";
import PersonsTable from "../../components/PersonsTable/PersonsTable";
import PersonsActions from "../../components/PersonsActions/PersonsActions";
import PersonUpdateDialog from "../../components/PersonUpdateDialog/PersonUpdateDialog";
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog";
import { mapPersonModel } from "../../utils/personsUtils";
import PersonsGrid from "../../components/PersonsGrid/PersonsGrid";
import LinearProgress from "@material-ui/core/LinearProgress";

const BusinessDetails = ({
  isLoadingBusiness,
  isLoadingPersons,
  selectedBusiness,
  persons,
  getBusiness,
  fetchPersons,
  createPerson,
  deletePerson,
  editPerson,
}) => {
  const { businessId } = useParams();
  const { t } = useTranslation();

  const [searchFilter, setSearchFilter] = useState("");
  const [displayType, setDisplayType] = useState("table");
  const [updateDialogOptions, setUpdateDialogOptions] = useState({
    open: false,
  });
  const [confirmationDialogOptions, setConfirmationDialogOptions] = useState({
    open: false,
  });

  useEffect(() => {
    getBusiness(businessId);
  }, [getBusiness, businessId]);

  useEffect(() => {
    if (selectedBusiness !== null) fetchPersons(selectedBusiness.businessId);
  }, [fetchPersons, selectedBusiness]);

  const handleSearchFilterChange = (filter) => {
    setSearchFilter(filter);
  };

  const handleCreateButtonClick = () => {
    setUpdateDialogOptions({
      open: true,
      title: t("businessDetails.create"),
      onCancel: closeUpdateDialog,
      onSubmit: startPersonCreation,
    });
  };

  const handleDeleteButtonClick = (person) => {
    setConfirmationDialogOptions({
      open: true,
      title: t("businessDetails.delete"),
      description: t("businessDetails.deleteDescription"),
      onCancel: closeConfirmationDialog,
      onSubmit: () => startPersonDeletion(person.personId),
    });
  };

  const handleEditButtonClick = (person) => {
    setUpdateDialogOptions({
      ...mapPersonModel(person),
      open: true,
      title: t("businessDetails.edit"),
      onCancel: closeUpdateDialog,
      onSubmit: (editedPerson) =>
        startPersonEdit(editedPerson, person.personId),
    });
  };

  const handleNameButtonClick = (person) => {
    setUpdateDialogOptions({
      ...mapPersonModel(person),
      open: true,
      title: t("businessDetails.details"),
      onSubmit: closeUpdateDialog,
    });
  };

  const handleDisplayTypeButtonClick = () => {
    setDisplayType((currentType) =>
      currentType === "table" ? "grid" : "table"
    );
  };

  const startPersonEdit = (person, personId) => {
    closeUpdateDialog();
    editPerson(selectedBusiness.businessId, person, personId);
  };

  const startPersonDeletion = (personId) => {
    closeConfirmationDialog();
    deletePerson(selectedBusiness.businessId, personId);
  };

  const startPersonCreation = (person) => {
    closeUpdateDialog();
    createPerson(selectedBusiness.businessId, person);
  };

  const closeUpdateDialog = () => {
    setUpdateDialogOptions({ open: false });
  };

  const closeConfirmationDialog = () => {
    setConfirmationDialogOptions({ open: false });
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toUpperCase().includes(searchFilter.toUpperCase())
  );

  return (
    <>
      {(isLoadingBusiness || isLoadingPersons) && (
        <LinearProgress color="secondary" />
      )}
      {confirmationDialogOptions.open && (
        <ConfirmationDialog {...confirmationDialogOptions} />
      )}
      {updateDialogOptions.open && (
        <PersonUpdateDialog {...updateDialogOptions} />
      )}
      <PersonsActions
        title={selectedBusiness?.name ?? ""}
        displayType={displayType}
        onDisplayTypeButtonClick={handleDisplayTypeButtonClick}
        onSearchFilterChange={handleSearchFilterChange}
        onCreateButtonClick={handleCreateButtonClick}
      />
      {displayType === "table" ? (
        <PersonsTable
          data={filteredPersons}
          onDeleteButtonClick={handleDeleteButtonClick}
          onEditButtonClick={handleEditButtonClick}
          onNameButtonClick={handleNameButtonClick}
        />
      ) : (
        <PersonsGrid
          data={filteredPersons}
          onDeleteButtonClick={handleDeleteButtonClick}
          onEditButtonClick={handleEditButtonClick}
          onNameButtonClick={handleNameButtonClick}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoadingBusiness: state.business.isLoading,
  isLoadingPersons: state.persons.isLoading,
  selectedBusiness: state.business.selected,
  persons: state.persons.data,
});

const mapDispatchToProps = {
  getBusiness,
  fetchPersons,
  createPerson,
  deletePerson,
  editPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
