import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { KeyboardDatePicker } from "@material-ui/pickers";

const PersonUpdateDialog = ({
  open,
  onCancel,
  onSubmit,
  title,
  initialName,
  initialEmail,
  initialPhone,
  initialRole,
  initialJoinDate,
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState(initialName ?? "");
  const [email, setEmail] = useState(initialEmail ?? "");
  const [phone, setPhone] = useState(initialPhone ?? "");
  const [role, setRole] = useState(initialRole ?? "");
  const [joinDate, setJoinDate] = useState(initialJoinDate ?? new Date());

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
          onChange={(event) => setName(event.target.value)}
          autoFocus
          margin="dense"
          label={t("personUpdateDialog.name")}
          type="text"
          fullWidth
          value={name}
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          margin="dense"
          label={t("personUpdateDialog.email")}
          type="email"
          fullWidth
          value={email}
        />
        <TextField
          onChange={(event) => setPhone(event.target.value)}
          margin="dense"
          label={t("personUpdateDialog.phone")}
          type="phone"
          fullWidth
          value={phone}
        />
        <TextField
          onChange={(event) => setRole(event.target.value)}
          margin="dense"
          label={t("personUpdateDialog.role")}
          type="text"
          fullWidth
          value={role}
        />
        <KeyboardDatePicker
          margin="normal"
          label={t("personUpdateDialog.joinDate")}
          format="yyyy-MM-dd"
          fullWidth
          value={joinDate}
          onChange={(date) => setJoinDate(date)}
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

export default PersonUpdateDialog;
