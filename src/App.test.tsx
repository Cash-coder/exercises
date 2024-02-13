import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Adjust the import path as necessary

describe('App component tests', () => {
  test('initially shows the toggleable element', () => {
    render(<App />);
    expect(screen.getByText('Toggle Challenge')).toBeInTheDocument();
  });

  test('hides the toggleable element when the button is clicked once', () => {
    render(<App />);
    const button = screen.getByText('Hide Element Below');
    fireEvent.click(button);
    expect(screen.queryByText('Toggle Challenge')).not.toBeInTheDocument();
  });

  test('shows the toggleable element again when the button is clicked twice', () => {
    render(<App />);
    const button = screen.getByText('Hide Element Below');
    fireEvent.click(button); // First click hides the element
    fireEvent.click(button); // Second click shows the element again
    expect(screen.getByText('Toggle Challenge')).toBeInTheDocument();
  });
});
