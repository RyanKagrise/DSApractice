function productsArray(array) {
  const products = [];

  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  return products;
}

//time and space = o(n^2) time and o(n) space
