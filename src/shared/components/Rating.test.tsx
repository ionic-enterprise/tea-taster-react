import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Rating } from './Rating';

describe('<Rating />', () => {
  describe('when enabled', () => {
    let props: any;
    beforeEach(() => (props = { onRatingChange: jest.fn() }));

    it('renders consistently', () => {
      const { asFragment } = render(<Rating {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('sets the opacity to 1', () => {
      render(<Rating {...props} />);
      const rating = screen.getByTestId(/rating/) as HTMLDivElement;
      expect(rating.style.opacity).toEqual('1');
    });

    it('sets the rating on click', async () => {
      render(<Rating {...props} />);
      const fourStars = screen.getByTestId(/Rate 4 stars/);
      fireEvent.click(fourStars);
      await waitFor(() => expect(props.onRatingChange).toHaveBeenCalledTimes(1));
      expect(props.onRatingChange).toBeCalledWith(4);
    });
  });

  describe('when disabled', () => {
    let props: any;
    beforeEach(() => (props = { onRatingChange: jest.fn(), disabled: true }));

    it('renders consistently', () => {
      const { asFragment } = render(<Rating {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('sets the opacity to 0.25', () => {
      render(<Rating {...props} />);
      const rating = screen.getByTestId(/rating/) as HTMLDivElement;
      expect(rating.style.opacity).toEqual('0.25');
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
