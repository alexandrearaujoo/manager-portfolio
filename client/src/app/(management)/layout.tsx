import Header from '@/components/Header';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="px-5 sm:px-16">{children}</main>
    </>
  );
}
