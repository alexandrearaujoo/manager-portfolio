import { getServerSession } from 'next-auth';

import { Session, User, UserStore } from '@/interfaces';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { create } from 'zustand';

export const userStore = create<UserStore>((set, get) => ({
  getSession: async () => await getServerSession(authOptions),
  getCurrentUser: async () => {
    const session: Session | null = await get().getSession();

    console.log(session);

    if (!session) {
      return;
    }

    const user = await fetchWrapper<User>('users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`
      }
    });

    if ('message' in user) {
      return;
    }

    return user;
  }
}));
