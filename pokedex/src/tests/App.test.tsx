import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getAllByText('');
  expect(linkElement).not.toBeNull();
});
