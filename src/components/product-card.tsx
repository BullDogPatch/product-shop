'use client';
import { useContext } from 'react';
import { Card } from './ui/card';
import { SingleProduct } from '@/lib/types';
import { Button } from './ui/button';
import Link from 'next/link';
import { CartContext } from './cart-provider';
import Image from 'next/image';

interface Props {
  product: SingleProduct;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Link href={`/products/${product.id}`} className=''>
      <Card>
        <div className='grid gap-4 p-4'>
          <div className='aspect-[4/5] w-full overflow-hidden rounded-xl'>
            <Image
              src={product.images[0]}
              alt='Product image'
              width={400}
              height={500}
              className='aspect-[4/5] object-cover border w-full'
            />
          </div>
          <div className='grid gap-1.5'>
            <h3
              className='font-semibold text-sm md:text-base'
              title={product.title}
            >
              {product.title.slice(0, 25)}...
            </h3>
            <p className='font-semibold text-sm md:text-base'>
              £{product.price}
            </p>
          </div>
          <p>{'⭐'.repeat(product.rating)}</p>
          <Button
            size='sm'
            className='cursor-pointer pointer-events-auto'
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
          >
            Add to cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
