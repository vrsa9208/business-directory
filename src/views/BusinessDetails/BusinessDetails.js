import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getBusiness } from "../../redux/actions/businessActions";
import { fetchPersons } from "../../redux/actions/personsActions";
import PersonsTable from "../../components/PersonsTable/PersonsTable";

const BusinessDetails = ({
  selectedBusiness,
  persons,
  getBusiness,
  fetchPersons,
}) => {
  const { businessId } = useParams();

  useEffect(() => {
    getBusiness(businessId);
  }, [getBusiness, businessId]);

  useEffect(() => {
    if (selectedBusiness !== null) fetchPersons(selectedBusiness.businessId);
  }, [fetchPersons, selectedBusiness]);

  return (
    <>
      <PersonsTable data={persons} />
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
