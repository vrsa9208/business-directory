import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  headerRow: {
    backgroundColor: theme.palette.primary.dark,
  },
  headerCell: {
    color: "white",
    fontWeight: "bold",
  },
  actionButton: {
    marginInline: theme.spacing(1),
  },
}));
