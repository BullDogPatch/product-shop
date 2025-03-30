import CartTotal from './CartTotal';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className='h-24 p-4 flex justify-between items-center border-b-3 border-b-amber-800 '>
      <p>Shit-Shop</p>
      <div>
        <CartTotal />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
