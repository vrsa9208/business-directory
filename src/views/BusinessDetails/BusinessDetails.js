import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getBusiness } from "../../redux/actions/businessActions";

const BusinessDetails = ({ selectedBusiness, getBusiness }) => {
  const { businessId } = useParams();

  useEffect(() => {
    getBusiness(businessId);
  }, [getBusiness, businessId]);

  console.log("selectedBusiness", selectedBusiness);

  return (
    <>
      {selectedBusiness != null ? (
        <div>Business Details view {selectedBusiness.name}</div>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedBusiness: state.business.selected,
});

const mapDispatchToProps = {
  getBusiness,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
