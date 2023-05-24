import CardSkeleton from '@/components/CardSkeleton';

export default function Loading() {
  return (
    <section className="mt-10 w-full">
      <ul className="grid grid-cols-auto-fit gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </ul>
    </section>
  );
}
