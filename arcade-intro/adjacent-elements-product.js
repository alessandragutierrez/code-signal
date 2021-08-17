function adjacentElementsProduct(inputArray) {
  var productArray = [];
  var largestProduct = -Infinity;
  var i;
  for (i = 0; i < inputArray.length; i++) {
    productArray.push(inputArray[i] * inputArray[i + 1]);
  }
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i] > largestProduct) {
      largestProduct = productArray[i];
    }
  }
  return largestProduct;
}
