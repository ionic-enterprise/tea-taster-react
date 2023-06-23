import { vi } from 'vitest';

const clearSession = vi.fn().mockResolvedValue(undefined);
const getSession = vi.fn().mockResolvedValue(undefined);
const restoreSession = vi.fn().mockResolvedValue(undefined);
const setSession = vi.fn().mockResolvedValue(undefined);
const canUnlock = vi.fn().mockResolvedValue(undefined);
const getUnlockMode = vi.fn().mockResolvedValue(undefined);
const setUnlockMode = vi.fn().mockResolvedValue(undefined);
const registerCallback = vi.fn().mockReturnValue(undefined);
const unregisterCallback = vi.fn().mockReturnValue(undefined);

export {
  canUnlock,
  clearSession,
  getSession,
  getUnlockMode,
  restoreSession,
  setSession,
  setUnlockMode,
  registerCallback,
  unregisterCallback,
};
