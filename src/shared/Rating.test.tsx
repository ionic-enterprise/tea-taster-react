import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Rating } from './Rating';

describe('<Rating />', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders consistently', () => {
    const { asFragment } = render(<Rating />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders five empty stars', () => {
    render(<Rating />);
    const icons = screen.getAllByTestId('outline');
    expect(icons).toHaveLength(5);
  });

  it('fills in the first 3 stars', () => {
    render(<Rating rating={3} />);
    const icons = screen.getAllByTestId('star');
    expect(icons).toHaveLength(3);
  });

  it('emits the change rating change event on click', () => {
    const handleRatingChange = vi.fn();
    render(<Rating rating={3} onRatingChange={handleRatingChange} />);
    const icons = screen.getAllByTestId('outline');
    fireEvent.click(icons[0]);
    expect(handleRatingChange).toHaveBeenCalledTimes(1);
    expect(handleRatingChange).toHaveBeenCalledWith(4);
  });
});
