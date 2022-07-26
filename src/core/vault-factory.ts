import { isPlatform } from '@ionic/react';
import { BrowserVault, IdentityVaultConfig, Vault } from '@ionic-enterprise/identity-vault';

/**
 * Creates a Vault within Identity Vault
 *
 * This method can be used to create multiple Vaults throughout an application.
 *
 * @param config Configuration values for the Vault
 * @returns The Vault instance
 */
const createVault = (config: IdentityVaultConfig): Vault | BrowserVault =>
  isPlatform('hybrid') ? new Vault(config) : new BrowserVault(config);

export default createVault;
