import Avatar from './Avatar';

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-16">
      <h1 className="text-2xl text-white font-bold">Manager Portfolio</h1>
      <Avatar />
    </header>
  );
};

export default Header;
