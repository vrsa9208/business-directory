import React from "react";
import useStyles from "./TopBar.style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";

const TopBar = () => {
  const classes = useStyles();

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
          Business Directory
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
