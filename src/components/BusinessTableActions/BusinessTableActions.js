import React from "react";
import { style } from "./BusinessTableActions.style";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(style);

const BusinessTableActions = ({
  onSearchFilterChange,
  onCreateBusinessButtonClick,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleSearchFilterChange = (event) => {
    onSearchFilterChange(event.target.value);
  };

  return (
    <Grid container justifyContent="flex-end" className={classes.container}>
      <TextField
        onChange={handleSearchFilterChange}
        size="small"
        variant="outlined"
        label={t("businessTableActions.search")}
        type="text"
      />
      <Divider orientation="vertical" className={classes.divider} />
      <Button onClick={onCreateBusinessButtonClick} color="secondary">
        {t("businessTableActions.create")}
      </Button>
    </Grid>
  );
};

export default BusinessTableActions;
