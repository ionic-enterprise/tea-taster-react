export const SessionVaultProvider: React.FC = () => <div></div>;

export const useSessionVaultImpl = {
  isLocked: false,
  canUnlock: jest.fn(),
  setUnlockMode: jest.fn(),
  setSessionData: jest.fn(),
  getSessionData: jest.fn(),
  clearSessionData: jest.fn(),
};

export const useSessionVault = () => {
  return useSessionVaultImpl;
};
