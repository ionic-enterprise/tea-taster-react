import { ReactNode } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from './AuthProvider';

type Props = { children?: ReactNode };

export const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect to="/login" />;

  return <>{children}</>;
};
