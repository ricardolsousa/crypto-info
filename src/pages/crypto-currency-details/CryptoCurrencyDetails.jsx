import { useParams } from "react-router-dom";
import { useGetCoinQuery } from "services/cryptoApi";
import { styles } from "./styles";
import { compose } from "@reduxjs/toolkit";
import { withStyles } from "@mui/styles";
import { Box, Grid, Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { formatNumberWithDots } from "utils/functions/formatNumberWithDots";
import CryptoCurrencyStatisticsCard from "components/cards/crypto-currency-statistics/CryptoCurrencyStatisticsCard";

const CryptoCurrencyDetails = ({ classes }) => {
  const { cryptocurrencyId } = useParams();
  const { data, isLoading, error } = useGetCoinQuery(cryptocurrencyId);
  const [cryptoCurrency, setCryptoCurrency] = useState(null);

  useEffect(() => {
    setCryptoCurrency(data?.data?.coin);
  }, [data]);

  if (isLoading) return <div className={classes.title}>Loading...</div>;

  if (error) {
    const errorMessage = JSON.stringify(error);
    return <div className={classes.title}>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <img
              src={cryptoCurrency?.iconUrl}
              alt={cryptoCurrency?.name}
              width={48}
              height={48}
            />
            <Typography variant="h4" className={classes.title}>
              {cryptoCurrency?.name}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={`${classes.title} ${classes.chip}`}
            >
              {cryptoCurrency?.symbol}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={`${classes.title} ${classes.chip}`}
            >
              Rank #{cryptoCurrency?.rank}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Typography variant="h4" className={classes.title}>
              ${" "}
              {formatNumberWithDots(Number(cryptoCurrency?.price)?.toFixed(2))}
            </Typography>
            <Typography variant="body1" className={classes.title}>
              {cryptoCurrency?.name} Price (USD)
            </Typography>
          </Box>
          {cryptoCurrency?.price && cryptoCurrency?.allTimeHigh?.price && (
            <Box>
              <Slider
                value={Number(cryptoCurrency?.price)}
                valueLabelDisplay="auto"
                min={0}
                max={cryptoCurrency?.allTimeHigh?.price}
                className={classes.slider}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" className={classes.title}>
                  Low: $0
                </Typography>
                <Typography variant="body1" className={classes.title}>
                  High: ${Number(cryptoCurrency?.allTimeHigh?.price).toFixed(2)}
                </Typography>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
      {/* Statistics */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CryptoCurrencyStatisticsCard
            icon={<TrendingUpIcon className={classes.icon} />}
            title="Market Cap"
            content={`$ ${formatNumberWithDots(cryptoCurrency?.marketCap)}`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CryptoCurrencyStatisticsCard
            icon={<TrendingUpIcon className={classes.icon} />}
            title="Full Diluted"
            content={`$ ${formatNumberWithDots(
              cryptoCurrency?.fullyDilutedMarketCap
            )}`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CryptoCurrencyStatisticsCard
            icon={<TrendingUpIcon className={classes.icon} />}
            title="24 Volume"
            content={`$ ${formatNumberWithDots(cryptoCurrency?.["24hVolume"])}`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CryptoCurrencyStatisticsCard
            icon={<TrendingUpIcon className={classes.icon} />}
            title="Circulating Supply"
            content={`${formatNumberWithDots(
              Number(cryptoCurrency?.supply?.circulating)?.toFixed(2)
            )} ${cryptoCurrency?.symbol}`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default compose(withStyles(styles))(CryptoCurrencyDetails);
