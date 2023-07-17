import { NextRequest, NextResponse } from 'next/server';

import { User } from '@/interfaces';
import { api } from '@/services/api';
import { AxiosError } from 'axios';

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as {
    email: string;
    password: string;
  };

  try {
    const { data } = await api.post<User>('users/login', { email, password });

    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    return NextResponse.json(data, {
      headers: {
        'Set-Cookie': `userToken=${data.token}; Path=/; max-age=${oneMonth}`
      }
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data, { status: 404 });
    }
  }
}
