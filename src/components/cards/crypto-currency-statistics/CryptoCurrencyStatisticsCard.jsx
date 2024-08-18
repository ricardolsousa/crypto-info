import { withStyles } from "@mui/styles";
import { compose } from "@reduxjs/toolkit";
import { styles } from "./styles";
import { Box, Card, CardContent, Typography } from "@mui/material";

const CryptoCurrencyStatisticsCard = ({ icon, title, content, classes }) => {
  return (
    <Card className={classes.statisticCard}>
      <CardContent>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          {icon}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginLeft: "6px",
          }}
        >
          <Typography variant="h5" className={classes.title}>
            {content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default compose(withStyles(styles))(CryptoCurrencyStatisticsCard);
