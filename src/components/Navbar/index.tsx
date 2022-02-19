import { Link } from "react-router-dom";
import { isAuthenticated } from "util/auth";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-custom">
      <div className="navbar-container">
            <Link to="/movies" className="navbar-brand brand-custom">
              MovieFlix
            </Link>
        {isAuthenticated() ? (
            <a href="#2" className="btn-custom">
              SAIR
            </a>) : ""}
      </div>
    </nav>
  );
};

export default Navbar;
