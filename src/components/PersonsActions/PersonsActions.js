import React from "react";
import { style } from "./PersonsActions.style";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import GridonIcon from "@material-ui/icons/GridOn";
import TableChartIcon from "@material-ui/icons/TableChart";

const useStyles = makeStyles(style);

const PersonsActions = ({
  title,
  displayType,
  onSearchFilterChange,
  onCreateButtonClick,
  onDisplayTypeButtonClick,
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
        className={classes.searchFilter}
      />
      <Divider orientation="vertical" className={classes.divider} />
      <IconButton
        onClick={onDisplayTypeButtonClick}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        {displayType === "table" ? <GridonIcon /> : <TableChartIcon />}
      </IconButton>
      <Divider orientation="vertical" className={classes.divider} />
      <Button onClick={onCreateButtonClick} color="secondary">
        {t("commons.create")}
      </Button>
    </Grid>
  );
};

export default PersonsActions;
