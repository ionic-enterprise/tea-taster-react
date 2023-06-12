import { vi } from 'vitest';

const replace = vi.fn();
const push = vi.fn();
const useHistory = vi.fn().mockReturnValue({ replace, push });
const useParams = vi.fn().mockReturnValue({ id: '3' });

export { useHistory, useParams };
