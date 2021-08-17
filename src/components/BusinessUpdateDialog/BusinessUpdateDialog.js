import React from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";

const BusinessUpdateDialog = ({ open }) => {
  return (
    <Modal open={open}>
      <Paper elevation={3}>Hello World</Paper>
    </Modal>
  );
};

export default BusinessUpdateDialog;
