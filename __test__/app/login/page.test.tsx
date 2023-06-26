import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import User from '@/app/user/page';

test('loads and displays user', async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <User />
    </QueryClientProvider>
  );

  await waitFor(() => screen.getByRole('heading'), { timeout: 30000 });

  const { getByRole } = screen;
  console.log(getByRole);

  expect(screen.getByRole('heading')).toHaveTextContent('John Doe');
  expect(screen.getByText('john@doe.com')).toBeInTheDocument();
});
