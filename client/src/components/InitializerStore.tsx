'use client';

import { useRef } from 'react';

import { User } from '@/interfaces';
import { userStore } from '@/stores/userStore';

const InitializerStore = ({ user }: { user: User | null }) => {
  const initializer = useRef(false);

  if (!initializer.current) {
    userStore.setState({ user: user });
    initializer.current = true;
  }

  return null;
};

export default InitializerStore;
