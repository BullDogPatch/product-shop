import { fetchProducts } from '@/api/api';
import ProductCard from '@/components/product-card';
import { Product } from '@/lib/types';

const ProductsPage = async () => {
  const products: Product[] = await fetchProducts();
  console.log(products);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 lg:p-14'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
