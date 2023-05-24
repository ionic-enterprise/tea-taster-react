import { vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PinDialog } from './PinDialog';

const mockOnDismiss = vi.fn();

describe('<PinDialog />', () => {
  const component = <PinDialog setPasscodeMode={true} onDismiss={mockOnDismiss} />;

  beforeEach(() => vi.clearAllMocks());

  it('renders without crashing', () => {
    render(component);
    expect(component).toBeDefined();
  });

  describe('entering a new PIN', () => {
    it('renders consistently', () => {
      const { asFragment } = render(component);
      expect(asFragment()).toMatchSnapshot();
    });

    it('sets the title to "Create PIN"', () => {
      render(component);
      const titleElements = screen.getAllByText('Create PIN');
      expect(titleElements).toHaveLength(1);
    });

    it('sets the prompt to "Create Session PIN"', () => {
      render(component);
      expect(screen.getByText('Create Session PIN')).toBeInTheDocument();
    });

    it('adds markers for each button press, stopping after nine', async () => {
      render(component);
      const pin = screen.getByTestId('display-pin');
      await waitFor(() => fireEvent.click(screen.getByText('1')));
      expect(pin.textContent).toBe('*');
      await waitFor(() => fireEvent.click(screen.getByText('4')));
      expect(pin.textContent).toBe('**');
      await waitFor(() => fireEvent.click(screen.getByText('2')));
      expect(pin.textContent).toBe('***');
      await waitFor(() => fireEvent.click(screen.getByText('9')));
      expect(pin.textContent).toBe('****');
      for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('7')));
      expect(pin.textContent).toBe('********');
      await waitFor(() => fireEvent.click(screen.getByText('0')));
      expect(pin.textContent).toBe('*********');
      for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('4')));
      expect(pin.textContent).toBe('*********');
    });

    describe('delete button', () => {
      it('removes a marker', async () => {
        render(component);
        const pin = screen.getByTestId('display-pin');
        for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('4')));
        expect(pin.textContent).toBe('****');
        await waitFor(() => fireEvent.click(screen.getByText('Delete')));
        expect(pin.textContent).toBe('***');
      });
    });

    describe('cancel button', () => {
      it('is not shown', () => {
        render(component);
        expect(screen.queryByTestId('cancel-button')).toBeNull();
      });
    });

    describe('pressing enter', () => {
      it('asks for re-entry', async () => {
        render(component);
        const pin = screen.getByTestId('display-pin');
        await waitFor(() => fireEvent.click(screen.getByText('1')));
        await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByText('2')));
        await waitFor(() => fireEvent.click(screen.getByText('9')));
        expect(pin.textContent).toBe('****');
        await waitFor(() => fireEvent.click(screen.getByText('Enter')));
        expect(pin.textContent).toBe('');
        expect(screen.getByText('Verify PIN')).toBeInTheDocument();
      });

      it('calls onDismiss when entered PINs match', async () => {
        render(component);
        await waitFor(() => fireEvent.click(screen.getByText('1')));
        await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByText('2')));
        await waitFor(() => fireEvent.click(screen.getByText('9')));
        await waitFor(() => fireEvent.click(screen.getByText('Enter')));
        await waitFor(() => fireEvent.click(screen.getByText('1')));
        await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByText('2')));
        await waitFor(() => fireEvent.click(screen.getByText('9')));
        await waitFor(() => fireEvent.click(screen.getByText('Enter')));
        expect(mockOnDismiss).toHaveBeenCalledTimes(1);
        expect(mockOnDismiss).toHaveBeenCalledWith({ data: '1429' });
      });

      it('provides an error when the PINs do not match', async () => {
        render(component);
        await waitFor(() => fireEvent.click(screen.getByText('1')));
        await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByText('2')));
        await waitFor(() => fireEvent.click(screen.getByText('9')));
        await waitFor(() => fireEvent.click(screen.getByText('Enter')));
        await waitFor(() => fireEvent.click(screen.getByText('1')));
        await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByText('2')));
        await waitFor(() => fireEvent.click(screen.getByText('8')));
        await waitFor(() => fireEvent.click(screen.getByText('Enter')));
        expect(screen.getByText('PINs do not match')).toBeInTheDocument();
      });
    });
  });

  describe('entering a PIN to unlock the Vault', () => {
    const component = <PinDialog setPasscodeMode={false} onDismiss={mockOnDismiss} />;

    it('renders consistently', () => {
      const { asFragment } = render(component);
      expect(asFragment()).toMatchSnapshot();
    });

    it('sets the title to "Unlock"', () => {
      render(component);
      const titleElements = screen.getAllByText('Unlock');
      expect(titleElements).toHaveLength(1);
    });

    it('sets the prompt to "Enter PIN to Unlock"', () => {
      render(component);
      expect(screen.getByText('Enter PIN to Unlock')).toBeInTheDocument();
    });

    it('adds markers for each button press, stopping after nine', async () => {
      render(component);
      const pin = screen.getByTestId('display-pin');
      await waitFor(() => fireEvent.click(screen.getByText('1')));
      expect(pin.textContent).toBe('*');
      await waitFor(() => fireEvent.click(screen.getByText('4')));
      expect(pin.textContent).toBe('**');
      await waitFor(() => fireEvent.click(screen.getByText('2')));
      expect(pin.textContent).toBe('***');
      await waitFor(() => fireEvent.click(screen.getByText('9')));
      expect(pin.textContent).toBe('****');
      for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('7')));
      expect(pin.textContent).toBe('********');
      await waitFor(() => fireEvent.click(screen.getByText('0')));
      expect(pin.textContent).toBe('*********');
      for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('4')));
      expect(pin.textContent).toBe('*********');
    });

    describe('delete button', () => {
      it('removes a marker', async () => {
        render(component);
        const pin = screen.getByTestId('display-pin');
        for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('4')));
        expect(pin.textContent).toBe('****');
        await waitFor(() => fireEvent.click(screen.getByText('Delete')));
        expect(pin.textContent).toBe('***');
      });
    });

    describe('cancel button', () => {
      it('calls onDismiss', async () => {
        render(component);
        await waitFor(() => fireEvent.click(screen.getByTestId('cancel-button')));
        expect(mockOnDismiss).toHaveBeenCalledTimes(1);
        expect(mockOnDismiss).toHaveBeenCalledWith({ data: undefined, role: 'cancel' });
      });

      it('ignores entered data', async () => {
        render(component);
        for (let x = 0; x < 4; x++) await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByTestId('cancel-button')));
        expect(mockOnDismiss).toHaveBeenCalledTimes(1);
        expect(mockOnDismiss).toHaveBeenCalledWith({ data: undefined, role: 'cancel' });
      });
    });

    describe('pressing enter', () => {
      it('calls onDismiss passing back the pin', async () => {
        render(component);
        await waitFor(() => fireEvent.click(screen.getByText('1')));
        await waitFor(() => fireEvent.click(screen.getByText('4')));
        await waitFor(() => fireEvent.click(screen.getByText('2')));
        await waitFor(() => fireEvent.click(screen.getByText('9')));
        await waitFor(() => fireEvent.click(screen.getByText('Enter')));
        expect(mockOnDismiss).toHaveBeenCalledTimes(1);
        expect(mockOnDismiss).toHaveBeenCalledWith({ data: '1429' });
      });
    });
  });
});
