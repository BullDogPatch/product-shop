'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='relative w-1/2 mt-2'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] -translate-y-1/2 text-gray-500' />
      <input
        id='search'
        type='text'
        placeholder={placeholder}
        defaultValue={searchParams.get('search') || ''}
        onChange={(e) => handleSearch(e.target.value)}
        className='w-full p-2 pl-10 rounded-md border border-gray-300 focus:ring focus:ring-blue-300'
      />
    </div>
  );
};

export default Search;
