import { vi } from 'vitest';

const merge = vi.fn().mockResolvedValue(undefined);
const refresh = vi.fn().mockResolvedValue(undefined);
const remove = vi.fn().mockResolvedValue(undefined);

export const useTastingNotes = vi.fn(() => ({ notes: [], merge, refresh, remove }));
