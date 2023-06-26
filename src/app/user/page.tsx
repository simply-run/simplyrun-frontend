'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

type User = {
  id: number;
  name: string;
  email: string;
};

export const fetchUser = async (): Promise<User> => {
  const res = await fetch('/api/mock/user');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};

export default function User() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: + error.message;</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  );
}
