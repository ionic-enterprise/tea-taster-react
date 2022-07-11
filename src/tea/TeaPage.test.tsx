import { render } from '@testing-library/react';
import TeaPage, { teaData, listToMatrix } from './TeaPage';

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
        [teaData[0], teaData[1], teaData[2], teaData[3]],
        [teaData[4], teaData[5], teaData[6], teaData[7]],
      ];
      expect(listToMatrix()).toEqual(teaMatrix);
    });
  });
});
