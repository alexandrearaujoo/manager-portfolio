import { getServerSession } from 'next-auth';

import { Session, User, UserStore } from '@/interfaces';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { create } from 'zustand';

export const userStore = create<UserStore>((set, get) => ({
  user: null,
  getSession: async () => await getServerSession(authOptions),
  getCurrentUser: async () => {
    const { getSession } = get();

    const session = (await getSession()) as Session | null;

    if (!session) {
      return null;
    }

    const user = await fetchWrapper<User>('users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`
      }
    });

    if ('message' in user) {
      return null;
    }

    user.token = session.token;

    return user;
  }
}));
