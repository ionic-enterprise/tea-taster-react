import React from 'react';
import { waitForIonicReact } from '@ionic/react-test-utils';
import { render, waitFor } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import { Rating } from './Rating';

describe('<Rating />', () => {
  describe('when enabled', () => {
    let props: any;

    beforeEach(() => (props = { onRatingChange: jest.fn() }));

    it('renders consistently', async () => {
      const { asFragment } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      expect(asFragment()).toMatchSnapshot();
    });

    it('sets the opacity to 1', async () => {
      const { container } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      const rating = container.querySelector('.rating') as HTMLDivElement;
      expect(rating.style.opacity).toEqual('1');
    });

    it('sets the rating on click', async () => {
      const { getByTestId } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      const fourStars = getByTestId(/Rate 4 stars/);
      fireEvent.click(fourStars);
      expect(props.onRatingChange).toHaveBeenCalledWith(4);
    });

    it('calls the change handler on click', async () => {
      const { getByTestId } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      const fourStars = getByTestId(/Rate 4 stars/);
      fireEvent.click(fourStars);
      expect(props.onRatingChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('when disabled', () => {
    let props: any;

    beforeEach(() => {
      props = { onRatingChange: jest.fn(), disabled: true };
    });

    it('renders consistently', async () => {
      const { asFragment } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      expect(asFragment()).toMatchSnapshot();
    });

    it('sets the opacity to 0.25', async () => {
      const { container } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      const rating = container.querySelector('.rating') as HTMLDivElement;
      expect(rating.style.opacity).toEqual('0.25');
    });

    it('does not call the change handler on click', async () => {
      const { getByTestId } = render(<Rating {...props} />);
      await waitFor(() => waitForIonicReact());
      const fourStars = getByTestId(/Rate 4 stars/);
      fireEvent.click(fourStars);
      expect(props.onRatingChange).not.toHaveBeenCalled();
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
