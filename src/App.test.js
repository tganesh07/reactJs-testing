import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);

  expect(
    await screen.findByText('Karachi Fruit Biscuit 400G')
  ).toBeInTheDocument();
});
