import { vi } from 'vitest';

const clearSession = vi.fn().mockResolvedValue(undefined);
const getSession = vi.fn().mockResolvedValue(undefined);
const setSession = vi.fn().mockResolvedValue(undefined);
const registerSessionChangeCallback = vi.fn().mockReturnValue(undefined);
const unregisterSessionChangeCallback = vi.fn().mockReturnValue(undefined);

export { clearSession, getSession, setSession, registerSessionChangeCallback, unregisterSessionChangeCallback };
