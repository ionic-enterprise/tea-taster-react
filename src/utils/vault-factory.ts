import { isPlatform } from '@ionic/react';
import { BrowserVault, IdentityVaultConfig, Vault } from '@ionic-enterprise/identity-vault';

export const createVault = (config: IdentityVaultConfig): Vault | BrowserVault => {
  return isPlatform('hybrid') ? new Vault(config) : new BrowserVault(config);
};
