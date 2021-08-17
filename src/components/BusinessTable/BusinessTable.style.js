export const style = (theme) => ({
  headerRow: {
    backgroundColor: theme.palette.primary.dark,
  },
  headerCell: {
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  actionButton: {
    marginInline: theme.spacing(1),
    "&:last-child": {
      marginRight: 0,
    },
  },
});
