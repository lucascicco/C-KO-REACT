const searchByText = (array, text) => {
  const FiltredByText = array.filter((product) => {
    const productWord = product.product_name
      .toLowerCase()
      .includes(text.toLowerCase());

    return productWord;
  });

  return FiltredByText;
};

export default (products, category, text) => {
  if (category) {
    const ProductsByCategory = products.filter((product) => {
      return product.category === category;
    });

    if (text) {
      return searchByText(ProductsByCategory, text);
    }

    return ProductsByCategory;
  }

  if (text) {
    return searchByText(products, text);
  }

  return products;
};
