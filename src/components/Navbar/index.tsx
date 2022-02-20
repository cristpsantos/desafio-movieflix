import { Link, useHistory } from "react-router-dom";
import { isAuthenticated } from "util/auth";
import { removeAuthData } from "util/storage";
import "./styles.css";

const Navbar = () => {

  const history = useHistory();

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    history.replace("/")
  }

  return (
    <nav className="navbar navbar-custom">
      <div className="navbar-container">
            <Link to="/movies" className="navbar-brand brand-custom">
              MovieFlix
            </Link>
        {isAuthenticated() ? (
            <Link onClick={handleLogoutClick} to="#logout" className="btn-custom">
              SAIR
            </Link>) : ""}
      </div>
    </nav>
  );
};

export default Navbar;
