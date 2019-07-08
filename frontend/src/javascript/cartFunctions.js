var Cookies = require('js-cookie');

function getCartAsArray(cart) {
  let cartArray = [];
  for (var key in cart.cartItems) {
    cartArray.push(cart.cartItems[key]);
  }
  return cartArray;
}

function updateItemQty(cart, qty, id) {
  let currQty = cart.cartItems[id].quantity;
  let price = cart.cartItems[id].product.price;
  
  let itemToUpdate = cart.cartItems[id];
  itemToUpdate.quantity = qty;
  if (currQty > qty){
    addToCartPrice(cart, -price);
  } else {
    addToCartPrice(cart, price);
  }
  Cookies.set('cart', cart, {expires: 7});
	return cart;
}

function removeFromCart(cart, cartItemId, cartItemSize) {
  let key = cartItemId + cartItemSize;
  let price = cart.cartItems[key].quantity * cart.cartItems[key].product.price;
  
	delete cart.cartItems[key];
  addToCartPrice(cart, -price);
  addToCartCount(cart, -1);
  Cookies.set('cart', cart, {expires: 7});
	return cart;
}

function addToCart(cart, productId, product, size, quantity) {

  let productData = {
    id: productId,
    name: product.name,
    color: product.color,
    image: product.category + '/' + product.subcategory + '/' + product.images[0],
    price: product.price
  };
  let key = productId + size;
  let itemAlreadyInCart = cart.cartItems[key];
  
  if(!itemAlreadyInCart){
    cart.cartItems[key] = {product: productData, size: size, quantity: quantity};
    addToCartPrice(cart, product.price * quantity);
    addToCartCount(cart, 1);
  } else {
    let currentQty = itemAlreadyInCart.quantity;
    let newQty = currentQty + quantity;
    cart.cartItems[key] = {product: productData, size: size, quantity: newQty}

    let priceForMultiple = product.price * quantity;
    addToCartPrice(cart, priceForMultiple);
    addToCartCount(cart, 1);
  }
  Cookies.set('cart', cart, {expires: 7});
  return cart;
}

function addToCartPrice(cart, price){
  let currentPrice = cart.totalPrice;
  cart.totalPrice = currentPrice + price;
}

function addToCartCount(cart, quantity){
  let currentItemCount = cart.totalItems;
  cart.totalItems = currentItemCount + quantity;
}

export { addToCart, updateItemQty, removeFromCart, getCartAsArray };