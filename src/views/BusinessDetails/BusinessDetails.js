import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getBusiness } from "../../redux/actions/businessActions";
import { fetchPersons, createPerson } from "../../redux/actions/personsActions";
import { useTranslation } from "react-i18next";
import PersonsTable from "../../components/PersonsTable/PersonsTable";
import PersonsTableActions from "../../components/PersonsTableActions/PersonsTableActions";
import PersonUpdateDialog from "../../components/PersonUpdateDialog/PersonUpdateDialog";

const BusinessDetails = ({
  selectedBusiness,
  persons,
  getBusiness,
  fetchPersons,
  createPerson,
}) => {
  const { businessId } = useParams();
  const { t } = useTranslation();
  const [searchFilter, setSearchFilter] = useState("");

  const [updateDialogOptions, setUpdateDialogOptions] = useState({
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

  const startPersonCreation = (person) => {
    closeUpdateDialog();
    createPerson(selectedBusiness.businessId, person);
  };

  const closeUpdateDialog = () => {
    setUpdateDialogOptions({ open: false });
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toUpperCase().includes(searchFilter.toUpperCase())
  );

  return (
    <>
      {updateDialogOptions.open && (
        <PersonUpdateDialog {...updateDialogOptions} />
      )}
      <PersonsTableActions
        title={selectedBusiness?.name ?? ""}
        onSearchFilterChange={handleSearchFilterChange}
        onCreateButtonClick={handleCreateButtonClick}
      />
      <PersonsTable data={filteredPersons} />
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedBusiness: state.business.selected,
  persons: state.persons.data,
});

const mapDispatchToProps = {
  getBusiness,
  fetchPersons,
  createPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
