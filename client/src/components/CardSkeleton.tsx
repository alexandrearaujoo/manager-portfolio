const CardSkeleton = () => {
  return (
    <li className="relative flex items-center justify-center w-full shadow-lg p-8 overflow-hidden rounded-xl bg-white/20 animate-skeleton-body">
      <div className="flex flex-col items-start w-full gap-5 text-gray-200 transition-all duration-200">
        <h1 className="h-10 w-1/2 bg-white/10 rounded-md animate-skeleton-body" />
        <p className="w-full h-14 bg-white/10 rounded-md animate-skeleton-body" />
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-white/10 rounded-md animate-skeleton-body" />
          <div className="w-12 h-12 bg-white/10 rounded-md animate-skeleton-body" />
          <div className="w-12 h-12 bg-white/10 rounded-md animate-skeleton-body" />
        </div>
      </div>
    </li>
  );
};

export default CardSkeleton;
