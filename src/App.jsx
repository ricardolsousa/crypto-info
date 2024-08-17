import { useTheme } from "@mui/material";
import Navbar from "components/navbar/Navbar";
import CryptoCurrencies from "pages/crypto-currencies/CryptoCurrencies";
import CryptoCurrencyDetails from "pages/crypto-currency-details/CryptoCurrencyDetails";
import Homepage from "pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "routes/PublicRoute";

function App() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{
          padding: "86px 24px 24px",
        }}
      >
        <Routes>
          <Route path="/" element={<PublicRoute element={<Homepage />} />} />
          <Route
            path="/cryptocurrencies"
            element={<PublicRoute element={<CryptoCurrencies />} />}
          />
          <Route
            path="/cryptocurrencies/:uuid"
            element={<PublicRoute element={<CryptoCurrencyDetails />} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
