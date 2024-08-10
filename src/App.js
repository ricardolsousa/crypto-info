import "./App.css";
import { useGetCoinsQuery } from "./services/cryptoApi";

function App() {
  const { data, error, isLoading } = useGetCoinsQuery();
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    const errorMessage = error.data?.message || JSON.stringify(error.data);
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Cryptocurrency Prices</h1>
      {coins?.map((coin) => (
        <li key={`${coin.uuid}`}>
          {coin.name}: {coin.price}
        </li>
      ))}
    </div>
  );
}

export default App;
