import { vi } from 'vitest';

const replace = vi.fn();
const useHistory = vi.fn().mockReturnValue({ replace });

export { useHistory };
