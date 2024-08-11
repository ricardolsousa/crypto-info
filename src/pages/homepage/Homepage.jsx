import { Grid, useTheme } from "@mui/material";
import StatisticCard from "components/cards/StatisticCard";
import { useGetCoinsQuery } from "services/cryptoApi";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import StoreIcon from "@mui/icons-material/Store";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Homepage = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useGetCoinsQuery();
  const globalStats = data?.data?.stats;
  // const coins = data?.data?.coins;

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    const errorMessage = JSON.stringify(error);
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1 style={{ marginTop: "0px", color: theme.palette.primary.main }}>
        Cryptocurrency Prices
      </h1>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
  );
};

export default Homepage;
