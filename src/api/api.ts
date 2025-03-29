export const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
};

export const fetchProductByID = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await response.json();
};
