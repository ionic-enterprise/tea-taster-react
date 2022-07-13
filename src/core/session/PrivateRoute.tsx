import { Redirect } from 'react-router';
import { useSession } from './useSession';

export const PrivateRoute = ({ children }: any) => {
  const { session } = useSession();

  if (!session) {
    return <Redirect to="/login" />;
  }

  return children;
};
