import { NextRequest, NextResponse } from 'next/server';

import { User } from '@/interfaces';
import { fetchWrapper } from '@/utils/fetchWrapper';

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as {
    email: string;
    password: string;
  };
  const user = await fetchWrapper<User>('users/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ email, password })
  });

  if ('message' in user) {
    return NextResponse.json(user);
  }

  const oneMonth = 30 * 24 * 60 * 60 * 1000;

  return NextResponse.json(user, {
    headers: {
      'Set-Cookie': `userToken=${user.token}; Path=/; max-age=${oneMonth}`
    }
  });
}
