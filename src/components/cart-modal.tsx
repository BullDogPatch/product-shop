'use client';

import { useContext, useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CartContext } from './cart-provider';
import { Product } from '@/lib/types';
import Link from 'next/link';

export default function ShoppingCartModal() {
  const {
    cartItems,
    totalItems,
    subtotal,
    handleRemoveItem,
    handleUpdateQuantity,
  } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='relative m-2 cursor-pointer'
        >
          <ShoppingCart className='h-5 w-5' />
          {totalItems > 0 && (
            <Badge className='absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs'>
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className='w-full px-8 sm:max-w-md flex flex-col'>
        <SheetHeader className='space-y-2.5 pb-6'>
          <SheetTitle className='text-xl'>
            Shopping Cart ({totalItems})
          </SheetTitle>
          <Separator />
        </SheetHeader>

        <div className='flex-1 overflow-y-auto pr-2'>
          {cartItems.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-center py-10'>
              <ShoppingCart className='h-12 w-12 text-muted-foreground mb-4' />
              <h3 className='text-lg font-medium'>Your cart is empty</h3>
              <p className='text-muted-foreground mt-1'>
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
            </div>
          ) : (
            <ul className='space-y-5'>
              {cartItems.map((item: Product) => (
                <li key={item.id} className='flex gap-4'>
                  <div className='rounded-md overflow-hidden flex-shrink-0 h-20 w-20 bg-muted'>
                    <img
                      src={item.thumbnail || '/placeholder.svg'}
                      alt={item.title}
                      width={80}
                      height={80}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <div className='flex justify-between'>
                      <h4 className='font-medium'>{item.title}</h4>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 rounded-full cursor-pointer'
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className='h-4 w-4' />
                        <span className='sr-only'>Remove</span>
                      </Button>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      £{item.price?.toFixed(2)}
                    </p>
                    <div className='flex items-center mt-auto'>
                      <div className='flex items-center border rounded-md'>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 rounded-none rounded-l-md cursor-pointer'
                          onClick={() =>
                            handleUpdateQuantity(
                              item.id,
                              (item.quantity || 1) - 1
                            )
                          }
                        >
                          <Minus className='h-3 w-3' />
                          <span className='sr-only'>Decrease quantity</span>
                        </Button>
                        <span className='w-8 text-center text-sm'>
                          {item.quantity}
                        </span>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 rounded-none rounded-r-md cursor-pointer'
                          onClick={() =>
                            handleUpdateQuantity(
                              item.id,
                              (item.quantity || 1) + 1
                            )
                          }
                        >
                          <Plus className='h-3 w-3' />
                          <span className='sr-only'>Increase quantity</span>
                        </Button>
                      </div>
                      <span className='ml-auto font-medium'>
                        £{(item.price * (item.quantity ?? 1))?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='pt-6'>
          <Separator className='mb-4' />
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='font-medium'>Subtotal</span>
              <span className='font-medium'>£{subtotal?.toFixed(2)}</span>
            </div>
            <div className='flex items-center justify-between text-sm text-muted-foreground'>
              <span>Shipping and taxes calculated at checkout</span>
            </div>
            <Button
              className='w-full cursor-pointer'
              size='lg'
              disabled={cartItems.length === 0}
            >
              <Link href='/checkout' onClick={() => setIsOpen(false)}>
                Checkout
              </Link>
            </Button>
            <SheetClose asChild>
              <Button variant='outline' className='w-full'>
                <Link href='/' onClick={() => setIsOpen(false)}>
                  Continue Shopping
                </Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
