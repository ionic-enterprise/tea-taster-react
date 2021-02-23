import { isPlatform } from '@ionic/react';
import {
  AuthMode,
  IonicIdentityVaultUser,
  IonicNativeAuthPlugin,
  LockEvent,
  VaultErrorCodes,
} from '@ionic-enterprise/identity-vault';
import { BrowserVaultPlugin } from './BrowserVaultPlugin';
import { Session } from '../models';

export class SessionVault extends IonicIdentityVaultUser<Session> {
  private static instance: SessionVault | undefined = undefined;

  private constructor() {
    super(
      { ready: () => Promise.resolve(true) },
      {
        unlockOnAccess: true,
        hideScreenOnBackground: true,
        lockAfter: 500,
      },
    );
  }

  public static getInstance(): SessionVault {
    if (!SessionVault.instance) {
      SessionVault.instance = new SessionVault();
    }
    return SessionVault.instance;
  }

  async restoreSession(): Promise<Session | undefined> {
    try {
      return await super.restoreSession();
    } catch (error) {
      if (error.code === VaultErrorCodes.VaultLocked) {
        const vault = await this.getVault();
        await vault.clear();
      } else {
        throw error;
      }
    }
  }

  getPlugin(): IonicNativeAuthPlugin {
    if (isPlatform('capacitor')) return super.getPlugin();
    return BrowserVaultPlugin.getInstance();
  }
}
