export default function MyCart(cart) {
  this.cartItems = cart.cartItems || {};
  this.totalItems = cart.totalItems || 0;
  this.totalPrice = cart.totalPrice || 0;

  this.getCartAsArray = function(cart){
    let cartArray = [];
    for (var key in cart.cartItems) {
      cartArray.push(cart.cartItems[key]);
    }
    return cartArray;
  }

  this.updateItemQty = function(cart, qty, id) {
    let cartStateCopy = {...cart};
    let key = id;

    let qnty = cartStateCopy.cartItems[key].quantity;
    let price = cartStateCopy.cartItems[key].product.price;
    
    let itemToUpdate = cartStateCopy.cartItems[key];
    itemToUpdate.quantity = qty;
    if (qnty > qty){
      this.addToCartPrice(cartStateCopy, -price);
    } else {
      this.addToCartPrice(cartStateCopy, price);
    }
    return cartStateCopy;
  }

  this.removeFromCart = function(cart, cartItemId, cartItemSize) {
    let cartStateCopy = {...cart};
    let key = cartItemId + cartItemSize;

    let qty = cartStateCopy.cartItems[key].quantity;
    let price = cartStateCopy.cartItems[key].quantity * cartStateCopy.cartItems[key].product.price;
    
    delete cartStateCopy.cartItems[key];
    this.addToCartPrice(cartStateCopy, -price);
    this.addToCartCount(cartStateCopy, -qty);
  
    return cartStateCopy;
  }

  this.addToCart = function(cart, productId, product, size, quantity) {
    let updatedCart = {...cart};
    console.log(updatedCart);
    
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
      this.addToCartPrice(updatedCart, product.price * quantity);
      this.addToCartCount(updatedCart, 1);
    } else {
      let currentQty = itemAlreadyInCart.quantity;
      let newQty = currentQty + quantity;
      updatedCart.cartItems[key] = {product: productData, size: size, quantity: newQty}
  
      let priceForMultiple = product.price * quantity;
      this.addToCartPrice(updatedCart, priceForMultiple);
      this.addToCartCount(updatedCart, 1);
    }
    return updatedCart;
  }

  this.addToCartPrice = function(cart, price){
    let currentPrice = cart.totalPrice;
    cart.totalPrice = currentPrice + price;
  }

  this.addToCartCount = function(cart, quantity){
    console.log('cart.totalItems: ' + cart.totalItems);
    console.log('passed qty: ' + quantity);
    let currentItemCount = cart.totalItems;
    cart.totalItems = currentItemCount + quantity;
  }
};