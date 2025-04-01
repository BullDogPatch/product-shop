import { fetchFilteredProducts } from '@/api/api';
import ProductCard from '@/components/product-card';
import Search from '@/components/search';
import { Product } from '@/lib/types';

export default async function Home(props: {
  searchParams: Promise<{ search?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.search || '';

  const { products } = await fetchFilteredProducts(query);

  return (
    <div>
      <div className='flex flex-col'>
        <Search placeholder='search products' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 lg:p-14'>
          {!products.length ? (
            <p>No products with that name found :(</p>
          ) : (
            products.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
