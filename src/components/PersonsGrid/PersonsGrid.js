import React from "react";
import { style } from "./PersonsGrid.style";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(style);

const PersonCard = ({
  row,
  onDeleteButtonClick,
  onEditButtonClick,
  onNameButtonClick,
}) => {
  const { t } = useTranslation();

  return (
    <Card item xs={3}>
      <CardActionArea onClick={() => onNameButtonClick(row)}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {row.role}
          </Typography>
          <Typography color="textSecondary">{row.name}</Typography>
          <Typography color="textSecondary">{row.email}</Typography>
          <Typography color="textSecondary">{row.phone}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => onEditButtonClick(row)}>
          {t("commons.edit")}
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => onDeleteButtonClick(row)}
        >
          {t("commons.delete")}
        </Button>
      </CardActions>
    </Card>
  );
};

const PersonsGrid = ({
  data,
  onDeleteButtonClick,
  onEditButtonClick,
  onNameButtonClick,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((row) => (
          <Grid item xs={3}>
            <PersonCard
              key={row.personId}
              row={row}
              onDeleteButtonClick={onDeleteButtonClick}
              onEditButtonClick={onEditButtonClick}
              onNameButtonClick={onNameButtonClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PersonsGrid;
