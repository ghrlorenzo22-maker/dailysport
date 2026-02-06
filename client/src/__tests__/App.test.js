import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders homepage link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Daily sport\+/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const europeanLeaguesLink = screen.getByText(/European Leagues/i);
  const africanLeaguesLink = screen.getByText(/African Leagues/i);
  expect(europeanLeaguesLink).toBeInTheDocument();
  expect(africanLeaguesLink).toBeInTheDocument();
});