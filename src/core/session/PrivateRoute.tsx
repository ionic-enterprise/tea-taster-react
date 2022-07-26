import { Redirect } from 'react-router';
import { useSession } from './useSession';
//import { useSessionVault } from './__mocks__/SessionVaultProvider';

export const PrivateRoute = ({ children }: any) => {
  const { session } = useSession();
  //const { isLocked } = useSessionVault();

  if (!session) {
    return <Redirect to="/login" />;
  }

  return children;
};
