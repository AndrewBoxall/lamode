import React from 'react';

export const CartUserContext = React.createContext({
  userEmail: 'Guest',
  userPassword: null,
  login: () => {},
  shoppingCart: [],
  addToShoppingCart: (productId, product, size, quantity) => {}, 
  updateCartItems: (cartItems) => {},
  updateProductQuantity: (productId, productSize, quantity) => {}
});
