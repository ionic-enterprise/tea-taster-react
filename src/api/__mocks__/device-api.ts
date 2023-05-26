import { vi } from 'vitest';

const canUseBiometrics = vi.fn().mockResolvedValue(undefined);
const canUseSystemPasscode = vi.fn().mockResolvedValue(undefined);
const canUseCustomPasscode = vi.fn().mockReturnValue(undefined);
const canHideContentsInBackground = vi.fn().mockReturnValue(undefined);
const hideContentsInBackground = vi.fn().mockResolvedValue(undefined);
const isHidingContentsInBackground = vi.fn().mockResolvedValue(undefined);
const provisionBiometricPermission = vi.fn().mockResolvedValue(undefined);

export {
  canUseBiometrics,
  canUseSystemPasscode,
  canUseCustomPasscode,
  canHideContentsInBackground,
  hideContentsInBackground,
  isHidingContentsInBackground,
  provisionBiometricPermission,
};
