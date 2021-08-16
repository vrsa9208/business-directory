export const style = (theme) => ({
  headerRow: {
    backgroundColor: theme.palette.primary.dark,
  },
  headerCell: {
    color: "white",
    fontWeight: "bold",
  },
  actionButton: {
    marginInline: theme.spacing(1),
    "&:last-child": {
      marginRight: 0,
    },
  },
});
