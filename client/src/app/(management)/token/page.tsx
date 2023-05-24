import { cookies } from 'next/headers';
import Image from 'next/image';

export const metadata = {
  title: 'API Token'
};

export default function APIToken() {
  const token = cookies().get('userToken')?.value;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="space-y-4 w-full md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-white md:text-2xl">
          Your API Token
        </h1>
        <h2 className="text-md text-white">
          This token is mandatory to make requests on project routes, it is
          unique and does not expire.
        </h2>
        <p className="text-white w-full break-words">{token}</p>
        <h1 className="text-xl font-bold text-white md:text-2xl">API Url</h1>
        <p className="text-white w-full break-words text-center">
          {process.env.NEXT_PUBLIC_API_URL}
        </p>
      </div>
      <div className="w-full space-y-4 md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-white md:text-2xl">
          How to make a request
        </h1>
        <Image
          src="/assets/code.png"
          width={400}
          height={400}
          alt="code"
          priority
          className="w-auto h-auto"
        />{' '}
      </div>
    </div>
  );
}
