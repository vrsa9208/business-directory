import React from "react";
import { style } from "./PersonsTableActions.style";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(style);

const PersonsTableActions = ({
  title,
  onSearchFilterChange,
  onCreateButtonClick,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleSearchFilterChange = (event) => {
    onSearchFilterChange(event.target.value);
  };

  return (
    <Grid container justifyContent="flex-end" className={classes.container}>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link color="inherit" href="#/business">
          {t("personsTableActions.business")}
        </Link>
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
      <TextField
        onChange={handleSearchFilterChange}
        size="small"
        variant="outlined"
        label={t("commons.search")}
        type="text"
      />
      <Divider orientation="vertical" className={classes.divider} />
      <Button onClick={onCreateButtonClick} color="secondary">
        {t("personsTableActions.create")}
      </Button>
    </Grid>
  );
};

export default PersonsTableActions;
