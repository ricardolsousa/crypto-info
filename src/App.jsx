import Homepage from "pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "routes/PublicRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicRoute element={<Homepage />} />} />
      </Routes>
    </div>
  );
}

export default App;
