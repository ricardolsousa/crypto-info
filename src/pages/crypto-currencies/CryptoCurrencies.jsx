import { withStyles } from "@mui/styles";
import { compose } from "@reduxjs/toolkit";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { useGetCoinsQuery } from "services/cryptoApi";
import CryptoCurrenciesList from "components/crypto-currencies-list/CryptoCurrenciesList";

const CryptoCurrencies = ({ classes }) => {
  const { data: cryptoData, error, isLoading } = useGetCoinsQuery(100);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    setCryptos(cryptoData?.data?.coins);
  }, [cryptoData]);

  if (isLoading) return <div className={classes.title}>Loading...</div>;

  if (error) {
    const errorMessage = JSON.stringify(error);
    return <div className={classes.title}>Error: {errorMessage}</div>;
  }

  return (
    <div
      style={{
        marginTop: "16px",
      }}
    >
      <h1 className={classes.title}>List Of Crypto Currencies</h1>
      <CryptoCurrenciesList cryptos={cryptos} />
    </div>
  );
};

export default compose(withStyles(styles))(CryptoCurrencies);
