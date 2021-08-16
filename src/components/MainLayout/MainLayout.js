import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { style } from "./MainLayout.style";
import TopBar from "../TopBar/TopBar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(style);

const MainLayout = (props) => {
  const classes = useStyles();

  return (
    <div>
      <TopBar />
      <Container className={classes.mainContainer}>
        <main>{props.children}</main>
      </Container>
    </div>
  );
};

export default MainLayout;
