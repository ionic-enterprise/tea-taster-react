import {
  IdentityVault,
  IonicNativeAuthPlugin,
  PluginOptions,
} from '@ionic-enterprise/identity-vault';
import { BrowserVault } from './BrowserVault';

export class BrowserVaultPlugin implements IonicNativeAuthPlugin {
  private static instance: BrowserVaultPlugin | undefined = undefined;

  private constructor() {}

  public static getInstance(): BrowserVaultPlugin {
    if (!BrowserVaultPlugin.instance) {
      BrowserVaultPlugin.instance = new BrowserVaultPlugin();
    }
    return BrowserVaultPlugin.instance;
  }

  getVault(config: PluginOptions): IdentityVault {
    config.onReady!(BrowserVault.getInstance());
    return BrowserVault.getInstance();
  }
}
