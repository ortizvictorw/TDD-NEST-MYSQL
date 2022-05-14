import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('test login',()=>{
  render(<App />);
  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

})

