//  nextjs13 jest test

import { BasicButton } from '@/components/Buttons/BasicButton';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should render the button', () => {
    render(<BasicButton>Button Text</BasicButton>);
    expect(screen.getByText('Button Text')).toBeInTheDocument();
  });
  it('should render the button', () => {
    render(<BasicButton>Button Text</BasicButton>);
    fireEvent.click(screen.getByText('Button Text'));
    expect(screen.getByText('Button Text')).toBeInTheDocument();
  });
});
