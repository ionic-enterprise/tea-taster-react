import { vi } from 'vitest';

export const useTea = vi.fn(() => ({ teas: [], rate: vi.fn().mockResolvedValue(undefined) }));
