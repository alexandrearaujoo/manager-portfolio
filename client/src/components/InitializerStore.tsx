'use client';

import { useRef } from 'react';

import { User } from '@/interfaces';
import { userStore } from '@/stores/userStore';
import { setCookie } from 'cookies-next';

const InitializerStore = ({ user }: { user: User | null }) => {
  const initializer = useRef(false);

  if (!initializer.current) {
    setCookie('token', user?.token);
    userStore.setState({ user: user });
    initializer.current = true;
  }

  return null;
};

export default InitializerStore;
