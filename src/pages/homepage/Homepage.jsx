import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import millify from "millify";
import { useGetCoinsQuery } from "services/cryptoApi";

const Homepage = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useGetCoinsQuery();
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    const errorMessage = JSON.stringify(error);
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Cryptocurrency Prices</h1>
      <pre>{JSON.stringify(globalStats, null, 2)}</pre>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Card style={{ color: `${theme.palette.background.paper}` }}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: `${theme.palette.primary.main}` }}
                >
                  Total Coins
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: `${theme.palette.secondary.main}` }}
                >
                  {millify(globalStats?.totalCoins)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Total Markets
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {globalStats?.totalMarkets}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Total Exchanges
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {globalStats?.totalExchanges}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Total Market Cap
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {globalStats?.totalMarketCap}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      {coins?.map((coin) => (
        <li key={`${coin.uuid}`}>
          {coin.name}: {coin.price}
        </li>
      ))}
    </div>
  );
};

export default Homepage;
