import { IdentityVaultConfig } from '@ionic-enterprise/identity-vault';
import { vi } from 'vitest';

let onLockCallback: undefined | (() => Promise<void>);
let onUnlockCallback: undefined | (() => Promise<void>);

const mockVault = {
  config: undefined as IdentityVaultConfig | undefined,
  clear: vi.fn().mockResolvedValue(undefined),
  setValue: vi.fn().mockResolvedValue(undefined),
  getValue: vi.fn().mockResolvedValue(undefined),
  updateConfig: vi.fn().mockResolvedValue(undefined),
  isEmpty: vi.fn().mockResolvedValue(false),
  isLocked: vi.fn().mockResolvedValue(false),
  onConfigChanged: vi.fn().mockResolvedValue(undefined),
  onLock: vi.fn().mockImplementation((cb: () => Promise<void>) => (onLockCallback = cb)),
  onPasscodeRequested: vi.fn().mockResolvedValue(undefined),
  onUnlock: vi.fn().mockImplementation((cb: () => Promise<void>) => (onUnlockCallback = cb)),
  lock: vi.fn().mockImplementation(() => onLockCallback && onLockCallback()),
  unlock: vi.fn().mockImplementation(() => onUnlockCallback && onUnlockCallback()),
};

export const createVault = vi.fn().mockImplementation((config: IdentityVaultConfig) => {
  mockVault.config = config;
  return mockVault;
});
