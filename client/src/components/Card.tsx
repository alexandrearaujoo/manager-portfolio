import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { TbNetwork } from 'react-icons/tb';

interface CardProps {
  id: string;
  title: string;
  type: string | null;
  slug: string | null;
  thumbnail: string | null;
  linkWebsite: string;
  linkRepository: string;
  description: string | null;
  userId: string;
}

const Card = ({ title, thumbnail, linkWebsite, linkRepository }: CardProps) => {
  return (
    <li className="w-[190px] bg-zinc-800 shadow-[7px_5px_10px_rgba(0, 0, 0, 0.333)] flex flex-col items-center rounded-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all">
      <div className="p-5 bg-blue-500 w-full rounded-t-md">
        <h1 className="text-white font-bold text-center truncate">{title}</h1>
      </div>
      <Image
        src={thumbnail ?? '/assets/placeholder.png'}
        alt="Thumbnail"
        width={100}
        height={100}
        className="my-1 border-2 border-gray-900 translate-[5px_6px] w-[180px] h-[130px] rounded-md object-cover"
      />
      <hr className="h-[2px] w-full bg-gray-700" />
      <div className="flex items-center justify-center gap-5 py-2">
        <Link href={linkRepository ?? '/dashboard'} target="_blank">
          <AiFillGithub
            size={24}
            className="text-blue-500 hover:opacity-80 transition-all"
          />
        </Link>
        <Link href={linkWebsite ?? '/dashboard'} target="_blank">
          <TbNetwork
            size={24}
            className="text-blue-500 hover:opacity-80 transition-all"
          />
        </Link>
      </div>
    </li>
  );
};

export default Card;
