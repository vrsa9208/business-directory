import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getBusiness } from "../../redux/actions/businessActions";
import { fetchPersons } from "../../redux/actions/personsActions";
import PersonsTable from "../../components/PersonsTable/PersonsTable";
import PersonsTableActions from "../../components/PersonsTableActions/PersonsTableActions";

const BusinessDetails = ({
  selectedBusiness,
  persons,
  getBusiness,
  fetchPersons,
}) => {
  const { businessId } = useParams();
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    getBusiness(businessId);
  }, [getBusiness, businessId]);

  useEffect(() => {
    if (selectedBusiness !== null) fetchPersons(selectedBusiness.businessId);
  }, [fetchPersons, selectedBusiness]);

  const handleSearchFilterChange = (filter) => {
    setSearchFilter(filter);
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toUpperCase().includes(searchFilter.toUpperCase())
  );

  return (
    <>
      <PersonsTableActions
        title={selectedBusiness?.name ?? ""}
        onSearchFilterChange={handleSearchFilterChange}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
