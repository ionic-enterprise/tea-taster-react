import { isPlatform } from '@ionic/react';
import { BrowserVault, IdentityVaultConfig, Vault } from '@ionic-enterprise/identity-vault';

const createVault = (config: IdentityVaultConfig): Vault | BrowserVault =>
  isPlatform('hybrid') ? new Vault(config) : new BrowserVault(config);

export default createVault;
