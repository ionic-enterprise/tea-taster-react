import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { useSessionVault } from '../vault';
import { useSession } from './useSession';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSession();
  const { isLocked } = useSessionVault();

  return (
    <Route
      {...rest}
      render={(props) => (!isLocked && isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};
