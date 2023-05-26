import { vi } from 'vitest';

const canUnlock = vi.fn().mockResolvedValue(undefined);
const getUnlockMode = vi.fn().mockResolvedValue(undefined);
const setUnlockMode = vi.fn().mockResolvedValue(undefined);

export const useSessionVault = () => ({ canUnlock, getUnlockMode, setUnlockMode });

const SessionVaultProvider = ({ children }: any) => <div>{children}</div>;
export default SessionVaultProvider;
