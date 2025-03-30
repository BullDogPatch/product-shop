'use client';

import { useContext } from 'react';
import { CartContext } from './cart-provider';

const CartTotal = () => {
  const { getCartTotal } = useContext(CartContext);
  const total: number = getCartTotal();
  return <span>£{total.toFixed(2)}</span>;
};

export default CartTotal;
