import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header/Header';
import Body from './Pages/Home/Home';

import {CartUserContext} from './javascript/CartUserContext';
import {shoppingCart} from './javascript/shoppingCart';

const Product = lazy(() => import('./Pages/ProductPages/Product'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Cart = lazy(() => import('./Pages/Cart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Login = lazy(() => import('./Pages/Login'));
const Categories = React.lazy(() => import('./Pages/ProductPages/Categories'));

library.add(fab, fas);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userEmail: 'AppUserName',
      userPassword: null,
      login: this.userLogin,
      shoppingCart: shoppingCart.cartItems,
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
  updateCartItems = (cartItems) => {
    this.setState({shoppingCart: cartItems});
  }
  updateProductQuantity = (productId, productSize, quantity) => {

  }
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <CartUserContext.Provider value={this.state}>
              <Header />
              <Route path="/" exact component={Body} />
              <Suspense fallback={<div></div>}>
                <Switch>
                  <Route path="/cart" exact component={Cart} />
                  <Route path="/checkout" exact component={Checkout} />
                  <Route path="/login" exact component={Login} />
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
