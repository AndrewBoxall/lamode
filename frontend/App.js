import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header/Header';
import Home from './Pages/Home';

import {CartUserContext} from './javascript/CartUserContext';
import {shoppingCart} from './javascript/shoppingCart';

const Product = lazy(() => import('./Pages/Product'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Cart = lazy(() => import('./Pages/Cart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Login = lazy(() => import('./Pages/Login'));
const Categories = React.lazy(() => import('./Pages/Categories'));

library.add(fab, fas);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userEmail: 'AppUserName',
      userPassword: null,
      login: this.userLogin,
      shoppingCart: shoppingCart,
      calculateCartTotal: this.calculateCartTotal,
      addToShoppingCart: this.addToShoppingCart, 
      updateCartItems: this.updateCartItems,
      updateProductQuantity: this.updateProductQuantity,
      shipping: shoppingCart.shipping,
      totalPrice: shoppingCart.totalPrice
    }
  }
  userLogin = (email, password) => {
    

  }
  addToShoppingCart = (productId, product, size, quantity) => {
    let updatedCart = [...this.state.shoppingCart]
    updatedCart.push({
      productId: productId,
      product: product,
      size: size,
      quantity: quantity
    });

    this.setState({shoppingCart: updatedCart, userEmail: 'newUserName'});
  }
  calculateCartTotal = (cart) => {
    let totalCost = 0;

    for (var i = 0; i < cart.length; i++){
      totalCost += cart[i].product.price * cart[i].quantity;
    }
    return totalCost;
  }
  updateCartItems = (cartItems) => {
    this.setState({shoppingCart: cartItems});
  }
  updateProductQuantity = (productId, productSize, quantity) => {

  }
  render() {
    return (
        <BrowserRouter basename="/lamode">
          <React.Fragment>
            <CartUserContext.Provider value={this.state}>
              <Header />
              
              <Suspense fallback={<div></div>}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/login" component={Login} />
                  <Route path="/categories/:main/:sub?" exact component={Categories} />
                  <Route path="/categories/:main/:sub/:productname" component={Product} />
                </Switch>
                <Footer />
              </Suspense>
            </CartUserContext.Provider>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
