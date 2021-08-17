import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const BusinessUpdateDialog = ({
  open,
  onCancel,
  onSubmit,
  title,
  ...props
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState(props.name || "");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOnOkButtonClick = () => {
    setName("");
    onSubmit(name);
  };

  const handleOnCancelButtonClick = () => {
    setName("");
    onCancel();
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <TextField
          onChange={handleNameChange}
          autoFocus
          margin="dense"
          id="name"
          label={t("businessUpdateDialog.name")}
          type="text"
          fullWidth
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnCancelButtonClick} color="primary">
          {t("commons.cancel")}
        </Button>
        <Button onClick={handleOnOkButtonClick} color="primary">
          {t("commons.ok")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BusinessUpdateDialog;
