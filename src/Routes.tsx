import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import MoviesReviews from "pages/MovieReviews";
import Movies from "pages/Movies";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
                <Redirect from="/" to="/auth/login" exact/>
                <Route path="/auth/login" exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;