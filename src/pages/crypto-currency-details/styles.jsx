import { createStyles } from "@mui/styles";

export const styles = (theme) =>
  createStyles({
    title: {
      color: theme.palette.primary.main,
    },
    chip: {
      padding: "2px 10px",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "4px",
    },
    statisticCard: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      fontSize: "24px",
      color: `${theme.palette.secondary.main}`,
    },
    slider: {
      cursor: "auto !important",
      "& .MuiSlider-thumb": {
        display: "none",
      },
      color: theme.palette.primary.main,
    },
  });
