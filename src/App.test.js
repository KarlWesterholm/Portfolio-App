import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('does the scroll thing', () => {
  render(<Header />);
  
  const projButton = screen.getByText("Projects");
  fireEvent.click(projButton);
  expect(id === 'projects-section')
});