import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import millify from "millify";
import { styles } from "./styles";
import { withStyles } from "@mui/styles";
import { compose } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const CryptoCurrenciesCard = ({ coin, index, classes }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/cryptocurrencies/${coin.uuid}`)}
      style={{
        color: `${theme.palette.background.paper}`,
        height: "220px",
        cursor: "pointer",
      }}
    >
      <CardContent className={classes.cardContainer}>
        <Box className={classes.headerContainer}>
          <div style={{ display: "flex" }}>
            <Typography className={classes.text}>{index + 1}.</Typography>
            <Typography className={`${classes.text} ${classes.coinName}`}>
              {coin?.name}
            </Typography>
          </div>
          <img src={coin?.iconUrl} alt="" width={32} height={32} />
        </Box>
        <Box className={classes.contentContainer}>
          <Typography className={classes.text}>
            Price: ${millify(coin?.price)}
          </Typography>
          <Typography className={classes.text}>
            Market Cap: {millify(coin?.marketCap)}
          </Typography>
          <Typography className={classes.text}>
            Daily Change: {millify(coin?.change)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default compose(withStyles(styles))(CryptoCurrenciesCard);
