import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBusiness } from "../../redux/actions/businessActions";
import BusinessTable from "../../components/BusinessTable/BusinessTable";
import BusinessUpdateDialog from "../../components/BusinessUpdateDialog/BusinessUpdateDialog";

const BusinessList = ({ business, fetchBusiness }) => {
  useEffect(() => {
    fetchBusiness();
  }, [fetchBusiness]);

  return (
    <>
      <BusinessUpdateDialog open={true} title="Create Business" />
      <BusinessTable data={business} />
    </>
  );
};

const mapStateToProps = (state) => ({
  business: state.business.data,
});

const mapDispatchToProps = {
  fetchBusiness,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
