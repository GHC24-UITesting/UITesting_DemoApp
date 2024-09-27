import { screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import "@testing-library/jest-dom";
import { renderComponent } from '../app-utils'; 
import { sampleEventResponse } from './data/response';

jest.mock('axios');

describe('Event tests', () => {
  test('displays loading spinner while fetching events', async () => {
    (axios.request as jest.Mock).mockResolvedValue({ data: sampleEventResponse });

    renderComponent('events');

    fireEvent.change(screen.getByPlaceholderText('Enter city'), {
      target: { value: 'New York' },
    });
    fireEvent.click(screen.getByText('Search'));

    expect(screen.getByLabelText('Loading events...')).toBeInTheDocument();

  });
  
  test('fetches and displays events', async () => {
    (axios.request as jest.Mock).mockResolvedValue({ data: sampleEventResponse });

    renderComponent('events');

    fireEvent.change(screen.getByPlaceholderText('Enter city'), {
      target: { value: 'New York' },
    });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => expect(screen.queryByLabelText('Loading events...')).not.toBeInTheDocument());
    const eventElements = screen.getAllByText(sampleEventResponse.data[0].name);
    expect(eventElements[0]).toBeInTheDocument();
  });
});