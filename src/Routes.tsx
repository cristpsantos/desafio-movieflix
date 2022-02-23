import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import MoviesReviews from "pages/MovieReviews";
import Movies from "pages/Movies";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "util/auth";

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
                <Redirect from="/" to={isAuthenticated() ? "/movies" : "/auth/login"} exact/>
                <Route path="/auth/login" exact>
                    <Home />
                </Route>
                <Redirect from="*" to="/auth/login" exact/>
                <Route path="*">
                    <h1>Página não encontrada</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;