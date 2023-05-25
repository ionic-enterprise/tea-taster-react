import { ReactNode } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from './AuthProvider';
import { useSessionVault } from '../session-vault/SessionVaultProvider';

type Props = { children?: ReactNode };

export const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  const { isLocked } = useSessionVault();

  if (isLocked) return <Redirect to="/unlock" />;
  if (!isAuthenticated) return <Redirect to="/login" />;

  return <>{children}</>;
};
