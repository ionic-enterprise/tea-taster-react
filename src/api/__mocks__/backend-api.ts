import { vi } from 'vitest';

const client = {
  get: vi.fn().mockResolvedValue({ data: null }),
  post: vi.fn().mockResolvedValue({ data: null }),
  delete: vi.fn().mockResolvedValue({ data: null }),
};

export { client };
