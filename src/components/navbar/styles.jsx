import { createStyles } from "@mui/styles";

export const styles = (theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      height: "70px",
      gap: "32px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
    },
    link: {
      color: theme.palette.primary.main,
      padding: "8px 16px",
      backgroundColor: theme.palette.background.default,
      borderRadius: "12px",
      fontSize: "20px",
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  });
