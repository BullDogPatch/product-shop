import CartTotal from './CartTotal';
import { ModeToggle } from './ModeToggle';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='h-24 p-4 flex justify-between items-center border-b-3 border-b-amber-800 '>
      <p>Shit-Shop</p>
      <div className='flex items-center'>
        <CartTotal />
        <FaCartShopping size={30} />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
