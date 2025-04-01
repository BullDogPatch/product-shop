'use client';

const Search = ({ placeholder }: { placeholder: string }) => {
  const handleSearch = (term: string) => {
    console.log(term);
  };
  return (
    <div>
      <label htmlFor=''>Search</label>
      <input
        type='text'
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
