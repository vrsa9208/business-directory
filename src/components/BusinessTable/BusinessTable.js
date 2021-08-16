import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "./BusinessTable.style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const BusinessTableRow = ({ row }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">
        <Button variant="contained" className={classes.actionButton}>
          {t("businessTable.edit")}
        </Button>
        <Button
          variant="contained"
          className={classes.actionButton}
          color="secondary"
        >
          {t("businessTable.delete")}
        </Button>
      </TableCell>
    </TableRow>
  );
};

const BusinessTable = ({ data }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Business table">
        <TableHead>
          <TableRow className={classes.headerRow}>
            <TableCell className={classes.headerCell}>
              {t("businessTable.business")}
            </TableCell>
            <TableCell className={classes.headerCell} align="right">
              {t("businessTable.actions")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <BusinessTableRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BusinessTable;
