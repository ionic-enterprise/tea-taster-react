import { useContext } from 'react';
import { SessionVaultContext } from './SessionVaultContext';

export const useSessionVault = () => {
  const { isLocked, canUnlock, setUnlockMode } = useContext(SessionVaultContext);

  if (SessionVaultContext === undefined) throw new Error('useSessionVault must be used within a SessionVaultProvider');

  return { isLocked, canUnlock, setUnlockMode };
};
