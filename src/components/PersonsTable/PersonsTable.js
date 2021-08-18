import React from "react";
import { useTranslation } from "react-i18next";
import { style } from "./PersonsTable.style";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(style);

const PersonsTableRow = ({
  row,
  onDeleteButtonClick,
  onEditButtonClick,
  onNameButtonClick,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Link
          color="primary"
          className={classes.nameButton}
          onClick={() => onNameButtonClick(row)}
        >
          {row.name}
        </Link>
      </TableCell>
      <TableCell component="th" scope="row">
        {row.role}
      </TableCell>
      <TableCell align="right">
        <Button
          onClick={() => onEditButtonClick(row)}
          variant="contained"
          className={classes.actionButton}
        >
          {t("commons.edit")}
        </Button>
        <Button
          onClick={() => onDeleteButtonClick(row)}
          variant="contained"
          className={classes.actionButton}
          color="secondary"
        >
          {t("commons.delete")}
        </Button>
      </TableCell>
    </TableRow>
  );
};

const PersonsTable = ({
  data,
  onDeleteButtonClick,
  onEditButtonClick,
  onNameButtonClick,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Business table">
        <TableHead>
          <TableRow className={classes.headerRow}>
            <TableCell className={classes.headerCell}>
              {t("personsTable.name")}
            </TableCell>
            <TableCell className={classes.headerCell}>
              {t("personsTable.role")}
            </TableCell>
            <TableCell className={classes.headerCell} align="right">
              {t("personsTable.actions")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <PersonsTableRow
              key={row.personId}
              row={row}
              onDeleteButtonClick={onDeleteButtonClick}
              onEditButtonClick={onEditButtonClick}
              onNameButtonClick={onNameButtonClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonsTable;
