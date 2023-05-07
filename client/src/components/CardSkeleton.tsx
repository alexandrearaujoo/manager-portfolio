const CardSkeleton = () => {
  return (
    <li className="w-[190px] bg-white/50 shadow-[7px_5px_10px_rgba(0, 0, 0, 0.333)] flex flex-col items-center rounded-md animate-skeleton-body">
      <div className="p-5 w-full rounded-t-md animate-skeleton-body">
        <h1 className="bg-white/40 h-4 rounded-md animate-skeleton-body" />
      </div>
      <div className="my-1 bg-white/40 w-[180px] h-[130px] rounded-md animate-skeleton-body" />
      <hr className="h-[2px] w-full bg-white/40 animate-skeleton-body" />
      <div className="flex items-center justify-center gap-5 py-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="w-6 h-6 rounded-full bg-white/40 animate-skeleton-body"
          />
        ))}
      </div>
    </li>
  );
};

export default CardSkeleton;
