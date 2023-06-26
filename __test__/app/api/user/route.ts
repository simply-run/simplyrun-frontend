import { NextResponse } from 'next/server';

// Mock API
export async function GET(request: Request) {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'test@gmail.com',
  };
  return NextResponse.json(user, { status: 200 });
}
