import { BiometricPermissionState, Device } from '@ionic-enterprise/identity-vault';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';

const key = 'hide-in-background';

const canUseBiometrics = async (): Promise<boolean> => isPlatform('hybrid') && (await Device.isBiometricsEnabled());
const canUseSystemPasscode = async (): Promise<boolean> => isPlatform('hybrid') && (await Device.isSystemPasscodeSet());
const canUseCustomPasscode = (): boolean => isPlatform('hybrid');
const canHideContentsInBackground = (): boolean => isPlatform('hybrid');

const hideContentsInBackground = async (value: boolean): Promise<void> => {
  await Device.setHideScreenOnBackground(value, true);
  return Preferences.set({ key, value: JSON.stringify(value) });
};

const isHidingContentsInBackground = async (): Promise<boolean> => {
  const { value } = await Preferences.get({ key });
  return JSON.parse(value || 'false');
};

const provisionBiometricPermission = async (): Promise<void> => {
  if ((await Device.isBiometricsAllowed()) === BiometricPermissionState.Prompt) {
    try {
      await Device.showBiometricPrompt({ iosBiometricsLocalizedReason: 'Please authenticate to continue' });
    } catch (error) {
      null;
    }
  }
};

export {
  canUseBiometrics,
  canUseSystemPasscode,
  canUseCustomPasscode,
  canHideContentsInBackground,
  hideContentsInBackground,
  isHidingContentsInBackground,
  provisionBiometricPermission,
};
