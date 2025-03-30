import ShoppingCartModal from './cart-modal';
import CartTotal from './CartTotal';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className='h-24 p-4 flex justify-between items-center border-b-3 border-b-amber-800 '>
      <p>Shit-Shop</p>
      <div className='flex items-center'>
        <ShoppingCartModal />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
