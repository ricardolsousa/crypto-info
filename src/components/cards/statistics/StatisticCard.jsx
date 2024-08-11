import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import millify from "millify";
import styles from "./styles.module.css";

const StatisticCard = ({ icon, title, content }) => {
  const theme = useTheme();
  return (
    <Card style={{ color: `${theme.palette.background.paper}` }}>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <div
            className={styles.iconContainer}
            style={{
              border: `4px solid ${theme.palette.primary.main}`,
            }}
          >
            {icon}
          </div>
        </Box>
        <Box style={{ marginLeft: "16px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ color: `${theme.palette.primary.main}` }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: `${theme.palette.secondary.main}` }}
          >
            {millify(content)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
