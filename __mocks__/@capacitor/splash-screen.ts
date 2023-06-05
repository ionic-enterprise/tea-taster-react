import { vi } from 'vitest';

const hide = vi.fn().mockResolvedValue(undefined);
const show = vi.fn().mockResolvedValue(undefined);

export const SplashScreen = { hide, show };
