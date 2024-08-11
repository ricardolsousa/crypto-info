import { useTheme } from "@mui/material";
import CryptoCurrencies from "pages/crypto-currencies/CryptoCurrencies";
import Homepage from "pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "routes/PublicRoute";

function App() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        padding: "24px 24px",
        minHeight: "calc(100vh - 48px)",
      }}
    >
      <Routes>
        <Route path="/" element={<PublicRoute element={<Homepage />} />} />
        <Route
          path="/cryptocurrencies"
          element={<PublicRoute element={<CryptoCurrencies />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
