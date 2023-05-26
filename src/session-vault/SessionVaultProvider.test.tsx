import { vi, Mock } from 'vitest';
import { Session, UnlockMode } from '../models';
import SessionVaultProvider, { useSessionVault } from './SessionVaultProvider';

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
});
