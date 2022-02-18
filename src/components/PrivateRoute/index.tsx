import { Redirect, Route } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  path: string;
};

const isAuthenticated = true;

const PrivateRoute = ({ children, path }: Props) => {

  return (
    <Route
      path={path}
      render={() =>
        isAuthenticated ? children : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;