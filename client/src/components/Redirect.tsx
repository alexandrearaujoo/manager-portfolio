import Link from 'next/link';

const Redirect = ({ href }: { href: string }) => {
  return (
    <div className="bg-button-gradient p-[0.15rem] rounded-xl w-[15.3em]">
      <Link
        href={href}
        className="w-[15em] flex items-center justify-center gap-2 relative h-[3.5rem] bg-zinc-800 text-white transition-all duration-200 rounded-xl text-base font-bold after:content-[''] after:absolute after:-top-[10px] after:left-[3%] after:w-[95%] after:h-[40%] after:bg-zinc-800 after:transition-all after:duration-300 after:origin-center before:content-[''] before:origin-center before:absolute before:top-[80%] before:left-[3%] before:w-[95%] before:h-[40%] before:bg-zinc-800 before:duration-300 hover:before:scale-0 hover:after:scale-0 hover:shadow-lg"
      >
        Login
      </Link>
    </div>
  );
};

export default Redirect;
