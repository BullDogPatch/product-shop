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

export const fetchCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');
  if (!response.ok) throw new Error('Failed to fetch categories');
  return await response.json();
};

export const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!response.ok) throw new Error('Failed to fetch products by category');
  return await response.json();
};
