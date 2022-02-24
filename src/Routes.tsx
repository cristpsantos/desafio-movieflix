import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import MoviesReviews from "pages/MovieReviews";
import Movies from "pages/Movies";
import { BrowserRouter, Switch } from "react-router-dom";

const Routes = () => {

    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <PrivateRoute path="/movies/:movieId">
                    <MoviesReviews />
                </PrivateRoute>
                <PrivateRoute path="/movies">
                    <Movies />
                </PrivateRoute>
                <PrivateRoute path="/auth/login" roles={['ROLE_MEMBER', 'ROLE_VISITOR']}>
                    <Home />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;