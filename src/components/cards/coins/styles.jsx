import { createStyles } from "@mui/styles";

export const styles = (theme) =>
  createStyles({
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingBottom: "16px",
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconContainer: {
      padding: "12px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.palette.primary.main,
    },
    coinName: {
      marginLeft: "8px !important",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: "16px",
      gap: "8px",
    },
  });
