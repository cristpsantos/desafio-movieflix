import { ReactComponent as AuthImage }  from "assets/images/desenho.svg";
import Auth from "./Auth";

import './styles.css';

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-description-container">
                <h1 className="home-title">Avalie Filmes</h1>
                <p className="home-description">Diga o você achou do seu <br /> filme favorito</p>
                <AuthImage />
            </div>
            <div className="home-login-container">
                <Auth />
            </div>

        </div>
    );
}

export default Home;