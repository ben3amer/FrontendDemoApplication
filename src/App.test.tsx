import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mocking store and persistor for testing
const mockStore = {}; // Mock the store
const mockPersistor = {}; // Mock the persistor

test('renders learn react link', () => {
  render(<App store={mockStore} persistor={mockPersistor} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
