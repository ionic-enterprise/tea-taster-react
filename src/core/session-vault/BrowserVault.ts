import { Plugins } from '@capacitor/core';
import {
  IdentityVault,
  PluginConfiguration,
  AuthMode,
  SupportedBiometricType,
  BiometricType,
} from '@ionic-enterprise/identity-vault';

export class BrowserVault implements IdentityVault {
  private static instance: BrowserVault | undefined = undefined;

  config = {
    authMode: AuthMode.SecureStorage,
    descriptor: {
      username: '',
      vaultId: '',
    },
    isBiometricsEnabled: false,
    isPasscodeEnabled: false,
    isPasscodeSetupNeeded: false,
    isSecureStorageModeEnabled: true,
    hideScreenOnBackground: false,
    lockAfter: 50000,
  };

  private constructor() {}

  public static getInstance(): BrowserVault {
    if (!BrowserVault.instance) {
      BrowserVault.instance = new BrowserVault();
    }
    return BrowserVault.instance;
  }

  async unsubscribe(): Promise<void> {}

  async clear(): Promise<void> {
    const { Storage } = Plugins;
    await Storage.clear();
  }

  async lock(): Promise<void> {}

  async isLocked(): Promise<boolean> {
    return false;
  }

  async isInUse(): Promise<boolean> {
    const { Storage } = Plugins;
    return !!(await Storage.get({ key: 'session' }));
  }

  async getConfig(): Promise<PluginConfiguration> {
    return this.config;
  }

  async remainingAttempts(): Promise<number> {
    return 5;
  }

  async getUsername(): Promise<string> {
    return 'MyUsername';
  }

  async storeToken(token: any): Promise<void> {}

  async getToken(): Promise<any> {
    return 'MyToken';
  }

  async storeValue(key: string, value: any): Promise<void> {
    const { Storage } = Plugins;
    await Storage.set({ key, value: JSON.stringify(value) });
  }

  async getValue(key: string): Promise<any> {
    const { Storage } = Plugins;
    const { value } = await Storage.get({ key });
    return JSON.parse(value!);
  }

  async removeValue(key: string): Promise<void> {
    const { Storage } = Plugins;
    await Storage.remove({ key });
  }

  async getKeys(): Promise<Array<string>> {
    const { Storage } = Plugins;
    const { keys } = await Storage.keys();
    return keys;
  }

  // tslint:disable-next-line
  async getBiometricType(): Promise<BiometricType> {
    return 'none';
  }

  async getAvailableHardware(): Promise<Array<SupportedBiometricType>> {
    return [];
  }

  async setBiometricsEnabled(isBiometricsEnabled: boolean): Promise<void> {}

  async isBiometricsEnabled(): Promise<boolean> {
    return false;
  }

  async isBiometricsAvailable(): Promise<boolean> {
    return false;
  }

  async isBiometricsSupported(): Promise<boolean> {
    return false;
  }

  async isLockedOutOfBiometrics(): Promise<boolean> {
    return false;
  }

  async isPasscodeSetupNeeded(): Promise<boolean> {
    return false;
  }

  async setPasscode(passcode?: string): Promise<void> {}

  async isPasscodeEnabled(): Promise<boolean> {
    return false;
  }

  async isSecureStorageModeEnabled(): Promise<boolean> {
    return true;
  }

  async setPasscodeEnabled(isPasscodeEnabled: boolean): Promise<void> {}

  async setSecureStorageModeEnabled(enabled: boolean): Promise<void> {}

  async unlock(usingPasscode?: boolean, passcode?: string): Promise<void> {}
}
