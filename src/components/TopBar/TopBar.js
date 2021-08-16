import React from "react";
import { useTranslation } from "react-i18next";
import { style } from "./TopBar.style";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles(style);

const TopBar = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <BusinessIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {t("topBar.title")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
