import { createStyles } from "@mui/styles";

export const styles = (theme) =>
  createStyles({
    title: {
      color: theme.palette.primary.main,
    },
    icon: {
      fontSize: "24px",
      color: `${theme.palette.secondary.main}`,
    },
    statisticCard: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
    },
  });
