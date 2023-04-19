import { vi } from 'vitest';

const rate = vi.fn().mockResolvedValue(undefined);
export const useTea = vi.fn(() => ({ teas: [], rate }));
