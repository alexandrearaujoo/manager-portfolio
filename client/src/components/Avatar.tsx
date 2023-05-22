'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

import { userStore } from '@/stores/userStore';
import { Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';

const Avatar = () => {
  const { user } = userStore.getState();

  return (
    <div className="w-full max-w-[180px] text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex w-full items-center gap-3 justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Image
              src={user?.image || '/assets/placeholder.png'}
              alt={user?.name || 'placeholder'}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="hidden md:block"> {user?.name}</p>
            <AiOutlineRight
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 sm:hidden">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/dashboard"
                    className={`${
                      active ? 'bg-button-gradient text-white' : 'text-gray-900'
                    } group transition-all duration-200 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Dashboard
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 sm:hidden">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/dashboard/token"
                    className={`${
                      active ? 'bg-button-gradient text-white' : 'text-gray-900'
                    } group transition-all duration-200 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    API Token
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-button-gradient text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {user?.email}
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      signOut();
                      Cookies.remove('userToken');
                    }}
                    className={`${
                      active ? 'bg-button-gradient text-white' : 'text-gray-900'
                    } group transition-all duration-200 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Avatar;
