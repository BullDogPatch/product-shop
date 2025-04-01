'use client';

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
    <div>
      <label htmlFor='search'>Search</label>
      <input
        id='search'
        type='text'
        placeholder={placeholder}
        defaultValue={searchParams.get('search') || ''}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
