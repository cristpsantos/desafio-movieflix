import { ReactComponent as AuthImage }  from "assets/images/desenho.svg";

import './styles.css';

const Home = () => {
    return(
        <div className="home-container">
            <div>
                <h1>Avalie Filmes</h1>
                <p>Diga o você achou do seu filme favorito</p>
                <AuthImage />
            </div>
        </div>
    );
}

export default Home;