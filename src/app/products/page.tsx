import { fetchProducts } from '@/api/api';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Product } from '@/lib/types';
import Link from 'next/link';

const ProductsPage = async () => {
  const products: Product[] = await fetchProducts();
  console.log(products);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 lg:p-14'>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card>
            <div className='grid gap-4 p-4'>
              <div className='aspect-[4/5] w-full overflow-hidden rounded-xl'>
                <img
                  src={product.image}
                  alt='Product image'
                  width='400'
                  height='500'
                  className='aspect-[4/5] object-cover border w-full'
                />
              </div>
              <div className='grid gap-1.5'>
                <h3 className='font-semibold text-sm md:text-base'>
                  {product.title.slice(0, 25)}...
                </h3>
                <p className='font-semibold text-sm md:text-base'>
                  £{product.price}
                </p>
              </div>
              <p>{'⭐'.repeat(product.rating.rate)}</p>
              <Button size='sm' className='cursor-pointer'>
                Add to cart
              </Button>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
