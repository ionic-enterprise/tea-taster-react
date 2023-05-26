import { vi } from 'vitest';
import { render } from '@testing-library/react';
import SessionVaultProvider from './SessionVaultProvider';

vi.mock('@capacitor/preferences');
vi.mock('../api/vault-factory-api');

describe('SessionVaultProvider', () => {
  const wrapper = (
    <SessionVaultProvider>
      <></>
    </SessionVaultProvider>
  );

  beforeEach(() => vi.clearAllMocks());

  it('renders consistently', () => {
    const { asFragment } = render(wrapper);
    expect(asFragment()).toMatchSnapshot();
  });
});
