import { fetchProductByID } from '@/api/api';
import AddToCartButton from '@/components/add-to-cart-button';
import { Badge } from '@/components/ui/badge';
import { SingleProduct } from '@/lib/types';

interface Params {
  params: Promise<{ id: number }>;
}

const ProductPage = async ({ params }: Params) => {
  const { id } = await params;
  const product: SingleProduct = await fetchProductByID(id);

  return (
    <section className='py-8 md:py-16 antialiased'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
          <div className='shrink-0 max-w-md lg:max-w-lg mx-auto'>
            <img
              className='h-[400px] w-full aspect-[4/5] rounded-xl'
              src={product.images[0]}
              alt=''
            />
          </div>

          <div className='mt-6 sm:mt-8 lg:mt-0'>
            <h1 className='text-xl font-semibold sm:text-2xl'>
              {product.title}
            </h1>
            <div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
              <p className='text-2xl font-extrabold sm:text-3xl'>
                £{product.price}
              </p>

              <div className='flex items-center gap-2 mt-2 sm:mt-0'>
                <div className='flex items-center gap-1'>
                  {/* <svg
                    className='w-4 h-4 text-yellow-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
                  </svg> */}
                  {'⭐'.repeat(product.rating)}
                </div>
                <p className='text-sm font-medium leading-none text-gray-500 dark:text-gray-400'>
                  ({product.rating})
                </p>
              </div>
            </div>
            <div className='mt-4'>
              {product.tags?.map((tag) => (
                <Badge key={tag} className='mr-1 rounded-sm'>
                  {tag}
                </Badge>
              ))}
            </div>
            <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
              <a
                href='#'
                title=''
                className='flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                role='button'
              >
                <svg
                  className='w-5 h-5 -ms-2 me-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z'
                  />
                </svg>
                Add to favorites
              </a>

              <AddToCartButton product={product} />
            </div>

            <hr className='my-6 md:my-8 border-gray-200 dark:border-gray-800' />

            <p className='text-gray-500 dark:text-gray-400 leading-relaxed'>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
