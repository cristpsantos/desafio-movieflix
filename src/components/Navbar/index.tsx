import { Link } from 'react-router-dom';
import './styles.css'


const Navbar = () => {

    return(
        <nav className="navbar navbar-custom">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand brand-custom">MovieFlix</Link>
                <a href="#2" className="btn-custom">SAIR</a>
                
            </div>
        </nav>
    )
}

export default Navbar;