import { render } from '@testing-library/react';
import TeaPage, { listToMatrix } from './TeaPage';
import { expectedTeas } from './__fixtures__/mockTeas';

const mockTeas = expectedTeas;
jest.mock('./TeaProvider', () => ({
  useTea: () => ({ teas: mockTeas }),
}));

describe('<TeaPage />', () => {
  it('displays the header', () => {
    const { container } = render(<TeaPage />);
    expect(container).toHaveTextContent(/Tea/);
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TeaPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('initialization', () => {
    it('makes a tea matrix', () => {
      const teaMatrix = [
        [expectedTeas[0], expectedTeas[1], expectedTeas[2], expectedTeas[3]],
        [expectedTeas[4], expectedTeas[5], expectedTeas[6], expectedTeas[7]],
      ];
      expect(listToMatrix(expectedTeas)).toEqual(teaMatrix);
    });
  });
});
