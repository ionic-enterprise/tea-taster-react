import { vi } from 'vitest';

const canUnlock = vi.fn().mockResolvedValue(undefined);
const getUnlockMode = vi.fn().mockResolvedValue(undefined);
const setUnlockMode = vi.fn().mockResolvedValue(undefined);
const clearSession = vi.fn().mockResolvedValue(undefined);
const getSession = vi.fn().mockResolvedValue(undefined);
const setSession = vi.fn().mockResolvedValue(undefined);

export { canUnlock, getUnlockMode, setUnlockMode, clearSession, getSession, setSession };
