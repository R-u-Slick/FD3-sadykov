const BASKET_PRODUCT_ADD='BASKET_PRODUCT_ADD';

const basketProduct_add=function(product) {
  return {
    type: BASKET_PRODUCT_ADD,
    product: product,
  };
}


export {
  basketProduct_add, BASKET_PRODUCT_ADD,
}
