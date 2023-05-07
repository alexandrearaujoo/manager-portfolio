import CardSkeleton from '@/components/CardSkeleton';

export default function Loading() {
  return (
    <section className="mt-10 grid grid-cols-auto-fit gap-7 justify-items-center">
      {Array.from({ length: 10 }, (_, i) => (
        <CardSkeleton key={i} />
      ))}
    </section>
  );
}
