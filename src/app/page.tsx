import Search from '@/components/search';

export default function Home() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 lg:p-14'>
      <Search placeholder='search products' />
    </div>
  );
}
