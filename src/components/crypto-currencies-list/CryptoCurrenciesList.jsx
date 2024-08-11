import { withStyles } from "@mui/styles";
import { compose } from "@reduxjs/toolkit";
import { styles } from "./styles";
import { Grid } from "@mui/material";
import CryptoCurrenciesCard from "components/cards/crypto-currencies/CryptoCurrenciesCard";

const CryptoCurrenciesList = ({ cryptos }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {cryptos?.map((coin, index) => (
        <Grid item xs={3}>
          <CryptoCurrenciesCard coin={coin} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default compose(withStyles(styles))(CryptoCurrenciesList);
