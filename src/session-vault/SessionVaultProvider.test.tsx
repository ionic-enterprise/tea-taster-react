import { vi, Mock } from 'vitest';
import { DeviceSecurityType, VaultType } from '@ionic-enterprise/identity-vault';
import { createVault } from '../api/vault-factory-api';
import { Session, UnlockMode } from '../models';
import SessionVaultProvider, { useSessionVault } from './SessionVaultProvider';
import { renderHook, waitFor } from '@testing-library/react';
import { Preferences } from '@capacitor/preferences';

vi.mock('@capacitor/preferences');
vi.mock('../api/vault-factory-api');

const MockChildComponent = () => {
  return <div data-testid="session-vault"></div>;
};

const mockComponent = (
  <SessionVaultProvider>
    <MockChildComponent />
  </SessionVaultProvider>
);

describe('SessionVaultProvider', () => {
  const wrapper = ({ children }: any) => <SessionVaultProvider>{children}</SessionVaultProvider>;

  let mockVault: any;
  const testSession: Session = {
    user: { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@test.com' },
    token: '123456789',
  };

  beforeEach(() => vi.clearAllMocks());

  it("hasn't figured out the tests it needs", () => {});

  // describe('on lock', () => {
  //   beforeEach(async () => {
  //     const { setSession } = useSessionVault();
  //     await setSession(testSession);
  //     (mockVault.getValue as Mock).mockResolvedValue(undefined);
  //   });

  //   it('clears the session cache', async () => {
  //     const { getSession } = useSessionVault();
  //     mockVault.lock();
  //     await getSession();
  //     expect(mockVault.getValue).toHaveBeenCalledTimes(1);
  //   });

  //   it('goes to the unlock page', () => {
  //     mockVault.lock();
  //     expect(router.replace).toHaveBeenCalledTimes(1);
  //     expect(router.replace).toHaveBeenCalledWith('/unlock');
  //   });
  // });
});
