import { Link } from 'react-router-dom';
import './styles.css';

const Movies = () => {
    return (
        <div className="movie-container">
            <h1>Tela de listagem de filmes</h1>
            <ul>
                <li>
                    <Link to="/movies/1" href="#1">Acessar/movies/1</Link>
                </li>
                <li>
                    <Link to="/movies/2">Acessar/movies/2</Link>
                </li>
            </ul>
        </div>
    );
}

export default Movies;