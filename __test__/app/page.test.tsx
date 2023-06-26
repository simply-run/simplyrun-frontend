//  nextjs13 jest test

import Home from '@/app/page';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should render the button', () => {
    render(<Home />);
    expect(screen.getByText('Button Icon')).toBeInTheDocument();
  });
  it('should render the button', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Button Icon'));
    expect(screen.getByText('Button Icon')).toBeInTheDocument();
  });
});
