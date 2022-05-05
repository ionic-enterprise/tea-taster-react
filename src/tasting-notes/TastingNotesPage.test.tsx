import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { IonApp } from '@ionic/react';
import { ShareOptions } from '@capacitor/share';
import { ionFireEvent as fireEvent, waitForIonicReact } from '@ionic/react-test-utils';
import TastingNotesPage from './TastingNotesPage';
import { mockNotes } from './__mocks__/mockNotes';
import { resultTeas } from '../tea/__mocks__/mockTeas';

const mockTeas = resultTeas();

jest.mock('../tea/useTea', () => ({
  useTea: () => ({
    getTeas: jest.fn(() => Promise.resolve(mockTeas)),
  }),
}));

const mockShare = jest.fn();
jest.mock('@capacitor/share', () => ({
  Share: {
    share: async (options: ShareOptions) => mockShare(options),
  },
}));

jest.mock('./useTastingNotes', () => ({
  useTastingNotes: () => ({
    getNotes: async () => mockNotes,
  }),
}));

describe('<TastingNotesPage />', () => {
  it('renders consistently', async () => {
    const { asFragment, getAllByTestId } = render(<TastingNotesPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(getAllByTestId(/note\d/).length).toEqual(3));
    expect(asFragment).toMatchSnapshot();
  });

  describe('initialization', () => {
    it('gets all of the notes', async () => {
      const { getAllByTestId } = render(<TastingNotesPage />);
      await waitFor(() => waitForIonicReact());
      await waitFor(() => expect(getAllByTestId(/note\d/).length).toEqual(3));
    });

    it('displays the notes', async () => {
      const { container } = render(<TastingNotesPage />);
      await waitFor(() => waitForIonicReact());
      await waitFor(async () => expect(container).toHaveTextContent(/Lipton/));
    });
  });

  describe('add a new note', () => {
    // Modals require <IonApp> to be present in the DOM as they're inserted as root-level components
    it('displays the editor modal', async () => {
      const { getByText, getByTestId } = render(
        <IonApp>
          <TastingNotesPage />
        </IonApp>
      );
      await waitFor(() => waitForIonicReact());
      const button = getByTestId(/fab-button/) as HTMLIonButtonElement;
      fireEvent.click(button);
      await waitFor(() => expect(getByText('Add New Tasting Note')).toBeDefined());
    });
  });

  describe('update an existing note', () => {
    it('pre-populates the editor modal', async () => {
      const { getByText, getByTestId } = render(
        <IonApp>
          <TastingNotesPage />
        </IonApp>
      );
      await waitFor(() => waitForIonicReact());
      const item = await waitFor(() => getByTestId(/note0/));
      fireEvent.click(item);
      await waitFor(() => {
        expect(getByText(/Update Tasting Note/)).toBeDefined();
      });
    });
  });

  describe.skip('sharing a note', () => {
    it('calls the share plugin when called', async () => {
      const { getByTestId } = render(<TastingNotesPage />);
      await waitFor(() => waitForIonicReact());
      const share = await waitFor(() => getByTestId(/share0/));
      fireEvent.click(share);
      await waitFor(() => expect(mockShare).toHaveBeenCalledTimes(1));
    });

    it('shares the brand, name, rating, and notes', async () => {
      const { brand, name, notes, rating } = mockNotes[2];
      const { getByTestId } = render(<TastingNotesPage />);
      await waitFor(() => waitForIonicReact());
      const share = await waitFor(() => getByTestId(/share0/));
      fireEvent.click(share);
      await waitFor(() =>
        expect(mockShare).toHaveBeenCalledWith({
          title: `${brand}: ${name}`,
          text: `${notes} Rated ${rating}/5 stars`,
          dialogTitle: `Share ${name}'s tasting note`,
          url: 'https://tea-taster-training.web.app',
        })
      );
    });
  });
});
