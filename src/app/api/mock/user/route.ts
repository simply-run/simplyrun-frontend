import { NextResponse } from 'next/server';

export async function GET() {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'JohnDoe@gmail.com',
  };
  return NextResponse.json(user, { status: 200 });
}
