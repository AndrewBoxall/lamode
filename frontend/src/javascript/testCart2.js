const shoppingCart =  {
  cartItems: {},
  totalItems: 0,
  totalPrice: 0
};

function initializeCart(cookie){

}
function getCartAsArray(cart) {
  let cartArray = [];
  for (var key in cart.cartItems) {
    cartArray.push(cart.cartItems[key]);
  }
  return cartArray;
}

function updateItemQty(cart, qty, id) {
  let cartStateCopy = {...cart};

  let qnty = cartStateCopy.cartItems[id].quantity;
  let price = cartStateCopy.cartItems[id].product.price;

  let itemToUpdate = cartStateCopy.cartItems[id];
  itemToUpdate.quantity = qty;
  if (qnty > qty){
    addToCartPrice(cartStateCopy, -price);
  } else {
    addToCartPrice(cartStateCopy, price);
  }
	return cartStateCopy;
}

function removeFromCart(cart, cartItemId, cartItemSize) {
  let cartStateCopy = {...cart};
  let key = cartItemId + cartItemSize;

  let qty = cartStateCopy.cartItems[key].quantity;
  let price = cartStateCopy.cartItems[key].quantity * cartStateCopy.cartItems[key].product.price;
  
	delete cartStateCopy.cartItems[key];
  addToCartPrice(cartStateCopy, -price);
  addToCartCount(cartStateCopy, -qty);

	return cartStateCopy;
}

function addToCart(cart, productId, product, size, quantity) {
  let updatedCart = {...cart};
  
  let productData = {
    id: productId,
    name: product.name,
    color: product.color,
    image: product.category + '/' + product.subcategory + '/' + product.images[0],
    price: product.price
  };
  let key = productId + size;
  let itemAlreadyInCart = updatedCart.cartItems[key];
  
  if(!itemAlreadyInCart){
    updatedCart.cartItems[key] = {product: productData, size: size, quantity: quantity};
    addToCartPrice(updatedCart, product.price * quantity);
    addToCartCount(updatedCart, 1);
  } else {
    let currentQty = itemAlreadyInCart.quantity;
    let newQty = currentQty + quantity;
    updatedCart.cartItems[key] = {product: productData, size: size, quantity: newQty}

    let priceForMultiple = product.price * quantity;
    addToCartPrice(updatedCart, priceForMultiple);
    addToCartCount(updatedCart, 1);
  }
  return updatedCart;
}

function addToCartPrice(cart, price){
  let currentPrice = cart.totalPrice;
  cart.totalPrice = currentPrice + price;
}

function addToCartCount(cart, quantity){
  let currentItemCount = cart.totalItems;
  cart.totalItems = currentItemCount + quantity;
}

export {shoppingCart, addToCart, updateItemQty, removeFromCart, getCartAsArray};