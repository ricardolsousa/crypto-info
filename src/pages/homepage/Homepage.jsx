import { Grid, useTheme } from "@mui/material";
import StatisticCard from "components/cards/statistics/StatisticCard";
import { useGetCoinsQuery } from "services/cryptoApi";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import StoreIcon from "@mui/icons-material/Store";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useEffect, useState } from "react";
import { compose } from "@reduxjs/toolkit";
import { styles } from "./styles";
import { withStyles } from "@mui/styles";
import CryptoCurrenciesList from "components/crypto-currencies-list/CryptoCurrenciesList";

const Homepage = ({ classes }) => {
  const theme = useTheme();
  const { data: cryptoData, error, isLoading } = useGetCoinsQuery(10);
  const [cryptos, setCryptos] = useState([]);
  const [globalStats, setGlobalStats] = useState(null);

  useEffect(() => {
    setGlobalStats(cryptoData?.data?.stats);
    setCryptos(cryptoData?.data?.coins);
  }, [cryptoData]);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    const errorMessage = JSON.stringify(error);
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1 className={classes.title}>Cryptocurrency Stats</h1>
      <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatisticCard
              icon={
                <CurrencyBitcoinIcon
                  style={{
                    fontSize: "40px",
                    color: `${theme.palette.secondary.main}`,
                  }}
                />
              }
              title={"Total Coins"}
              content={globalStats?.totalCoins}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatisticCard
              icon={
                <StoreIcon
                  style={{
                    fontSize: "40px",
                    color: `${theme.palette.secondary.main}`,
                  }}
                />
              }
              title={"Total Markets"}
              content={globalStats?.totalMarkets}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatisticCard
              icon={
                <CurrencyExchangeIcon
                  style={{
                    fontSize: "40px",
                    color: `${theme.palette.secondary.main}`,
                  }}
                />
              }
              title={"Total Exchanges"}
              content={globalStats?.totalExchanges}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatisticCard
              icon={
                <TrendingUpIcon
                  style={{
                    fontSize: "40px",
                    color: `${theme.palette.secondary.main}`,
                  }}
                />
              }
              title={"Total Market Cap"}
              content={globalStats?.totalMarketCap}
            />
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          marginTop: "16px",
        }}
      >
        <h1 className={classes.title}>List of 10 best crypto currencies</h1>
        <CryptoCurrenciesList cryptos={cryptos} />
      </div>
    </div>
  );
};

export default compose(withStyles(styles))(Homepage);
