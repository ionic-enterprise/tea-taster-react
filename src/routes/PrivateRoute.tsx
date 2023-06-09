import { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

type Props = { children?: ReactNode };

export const PrivateRoute = ({ children }: Props) => {
  const { session } = useAuth();

  // If there is no session, redirect the user to the login page.
  if (!session) return <Redirect to="/login" />;

  // Otherwise, return the route
  return <>{children}</>;
};
