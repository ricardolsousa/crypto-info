import { withStyles } from "@mui/styles";
import { compose } from "@reduxjs/toolkit";
import { styles } from "./styles";
import { Link } from "react-router-dom";

const Navbar = ({ classes }) => {
  return (
    <div className={classes.mainContainer}>
      <Link to="/" className={classes.link}>
        Homepage
      </Link>
      <Link to="/cryptocurrencies" className={classes.link}>
        Crypto Currencies
      </Link>
    </div>
  );
};

export default compose(withStyles(styles))(Navbar);
