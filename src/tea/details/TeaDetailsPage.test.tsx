import { render } from '@testing-library/react';
import { expectedTeas } from '../__fixtures__/mockTeas';
import TeaDetailsPage from './TeaDetailsPage';

const mockTeas = expectedTeas;
jest.mock('react-router', () => ({
  useParams: () => ({ id: 1 }),
}));
jest.mock('../TeaProvider', () => ({
  useTea: () => ({ teas: mockTeas }),
}));

describe('<TeaDetailsPage />', () => {
  it('displays the header', () => {
    const { container } = render(<TeaDetailsPage />);
    expect(container).toHaveTextContent(/Details/);
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TeaDetailsPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the tea name', () => {
    const { container } = render(<TeaDetailsPage />);
    expect(container).toHaveTextContent(mockTeas[0].name);
  });

  it('renders the tea description', () => {
    const { container } = render(<TeaDetailsPage />);
    expect(container).toHaveTextContent(mockTeas[0].description);
  });
});
