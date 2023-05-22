import Header from '@/components/Header';
import InitializerStore from '@/components/InitializerStore';

import { userStore } from '@/stores/userStore';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const user = await userStore.getState().getCurrentUser();
  userStore.setState({ user: user });

  return (
    <>
      <InitializerStore user={user} />
      <Header />
      <main className="px-5 sm:px-16">{children}</main>
    </>
  );
}
