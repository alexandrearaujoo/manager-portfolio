import Header from '@/components/Header';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="px-16">{children}</main>
    </>
  );
}
