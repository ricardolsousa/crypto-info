import { withStyles } from "@mui/styles";
import { compose } from "@reduxjs/toolkit";
import { styles } from "./styles";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetCoinsQuery } from "services/cryptoApi";
import CryptoCurrenciesList from "components/crypto-currencies-list/CryptoCurrenciesList";

const CryptoCurrencies = ({ classes }) => {
  const theme = useTheme();
  const { data: cryptoData, error, isLoading } = useGetCoinsQuery(100);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    setCryptos(cryptoData?.data?.coins);
  }, [cryptoData]);

  return (
    <div
      style={{
        marginTop: "16px",
      }}
    >
      <h1 className={classes.title}>List of crypto currencies</h1>
      <CryptoCurrenciesList cryptos={cryptos} />
    </div>
  );
};

export default compose(withStyles(styles))(CryptoCurrencies);
