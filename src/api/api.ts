export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  return await response.json();
};

export const fetchProductByID = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return await response.json();
};

export const fetchFilteredProducts = async (query: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  if (!response.ok) throw new Error('Failed to fetch products');
  return await response.json();
};
