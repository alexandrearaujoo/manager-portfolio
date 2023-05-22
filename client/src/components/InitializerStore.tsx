'use client';

import { useRef } from 'react';

import { User } from '@/interfaces';
import { userStore } from '@/stores/userStore';
import Cookies from 'js-cookie';

const InitializerStore = ({ user }: { user: User | null }) => {
  const initializer = useRef(false);

  if (!initializer.current) {
    userStore.setState({ user: user });
    Cookies.set('userToken', user?.token as string);
    initializer.current = true;
  }

  return null;
};

export default InitializerStore;
