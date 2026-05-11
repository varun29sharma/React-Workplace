const shoppingCart = [
  { id: 1, product: "HDMI Cable", price: 4 },
  { id: 2, product: "TV", price: 25 },
  { id: 3, product: "Switch", price: 6.5 },
];
//adding to the array..
[...shoppingCart, { id: 4, product: "speakers", price: 7 }];
//deleting from an array
shoppingCart.filter((item) => item.id != 2);
//updating all elements in array...
shoppingCart.map((item) => {
  return {
    ...item,
    product: item.product.toLowerCase(),
  };
});
//updating a particular element..
shoppingCart.map((item) => {
  if (item.id === 3) {
    return { ...item, price: 10.19 };
  } else {
    return item;
  }
});
