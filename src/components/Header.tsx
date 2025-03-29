import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className='h-24 p-4 flex justify-between items-center border border-b-amber-800'>
      <p>Shit-Shop</p>
      <ModeToggle />
    </header>
  );
};

export default Header;
