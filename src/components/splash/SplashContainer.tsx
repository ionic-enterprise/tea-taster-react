import { SplashScreen } from '@capacitor/splash-screen';
import { isPlatform } from '@ionic/react';
import { ReactNode, useEffect } from 'react';

type Props = { children?: ReactNode };

const SplashContainer = ({ children }: Props) => {
  useEffect(() => {
    isPlatform('hybrid') && SplashScreen.hide();
  }, []);

  return <>{children}</>;
};
export default SplashContainer;
