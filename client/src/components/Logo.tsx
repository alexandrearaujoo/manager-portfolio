import Image from 'next/image';

const Logo = ({ label }: { label?: boolean }) => {
  return (
    <div className="w-[95%] max-w-[350px] flex flex-col items-center">
      <Image
        src="/assets/logo.png"
        width={300}
        height={300}
        alt="Logo"
        className="w-[70%]"
      />
      {label && (
        <p className="text-2xl mt-4 text-white lg:text-[2rem]">
          Registre seus projetos de forma rapida e eficaz!
        </p>
      )}
    </div>
  );
};

export default Logo;
