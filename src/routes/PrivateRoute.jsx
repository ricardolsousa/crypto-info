// PrivateRoute.js
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const user = useSelector((state) => state["auth"]?.user);
  return user ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;
