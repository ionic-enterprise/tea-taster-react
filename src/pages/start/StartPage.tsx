import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { canUnlock, restoreSession } from '../../utils/session-vault';

const StartPage: React.FC = () => {
  const history = useHistory();

  const startup = async () => {
    const isUnlockable = await canUnlock();
    if (isUnlockable) {
      history.replace('/unlock');
    } else {
      await restoreSession();
      history.replace('/tabs/tea');
    }
  };

  const startupForceUnlock = async () => {
    await restoreSession();
    history.replace('/tabs/tea');
  };

  useEffect(() => {
    // This strategy takes you to the unlock page if there is a session to be unlocked.
    // From there, the user can choose to unlock or sign in again.
    startup();
    // If you comment out the above strategy and go with this one, when there is a locked
    // session, the user will be prompted to unlock the Vault automatically when it tries
    // to restore the session.
    // startupForceUnlock();
  }, []);

  return <></>;
};
export default StartPage;
