import { vi } from 'vitest';

const login = vi.fn().mockResolvedValue(undefined);
const logout = vi.fn().mockResolvedValue(undefined);
const setupAuthConnect = vi.fn().mockResolvedValue(undefined);

export { login, logout, setupAuthConnect };
