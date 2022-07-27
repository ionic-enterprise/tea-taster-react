import { Redirect } from 'react-router';
import { useSession } from './useSession';

export const PrivateRoute = ({ children }: any) => {
  const { user } = useSession();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
};
