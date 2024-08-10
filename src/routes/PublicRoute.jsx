// PublicRoute.js
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element }) => {
  const user = useSelector((state) => state["auth"]?.user);
  return user ? <Navigate to="/" /> : element;
};

export default PublicRoute;
