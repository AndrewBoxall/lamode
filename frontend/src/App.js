import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header/Header';
import Home from './Pages/Home';
//import { withCookies } from 'react-cookie';

import { CartUserContext } from './javascript/CartUserContext';
import { addToCart, removeFromCart, updateItemQty } from './javascript/cartFunctions';
import createSession from './javascript/createSession';
import { loadShopItems } from './javascript/loadShopItems';
import { loadShopItemssql } from './javascript/loadShopItemsMSSQL';
import PaymentDetails from './Components/Body/CheckoutPages/PaymentDetails';
var Cookies = require('js-cookie');

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
    //const cookies = this.props.cookies;
    const emptyCart = {
      cartItems: {},
      totalItems: 0,
      totalPrice: 0
    };

    this.state = {
      shoppingCart: Cookies.getJSON('cart') || emptyCart,
      addCartItem: this.addCartItem, 
      removeCartItem: this.removeCartItem,
      updateCartItemQty: this.updateCartItemQty,
      storeItems: null,
      sessionToken: Cookies.getJSON('sessionId') || null
    }
  }

  componentDidMount(){
    loadShopItemssql();
    loadShopItems().then((response) => {
      this.setState({storeItems: response})
    });
    this.createNewSession();
  }

  async createNewSession(){
    if (this.state.sessionToken === null) {
      let sessionKey = await createSession();
      Cookies.set('sessionId', sessionKey, {path: '/'});
      this.setState({sessionToken: sessionKey});
     // alert('creating new mount session: ' + sessionKey);
    }
  }

  addCartItem = (productId, product, size, quantity) => {
    let updatedCart = addToCart({...this.state.shoppingCart}, productId, product, size, quantity);
    this.setState({shoppingCart: updatedCart});
  }

  removeCartItem = (cartItemId, cartItemSize) => {
    let updatedCart = removeFromCart({...this.state.shoppingCart}, cartItemId, cartItemSize);
    this.setState({shoppingCart: updatedCart});
  }

  updateCartItemQty = (productId, quantity) => {
    let updatedCart = updateItemQty({...this.state.shoppingCart}, quantity, productId);
    this.setState({shoppingCart: updatedCart});
  }

  render() {
    return (
        <BrowserRouter basename="/lamode">
            <CartUserContext.Provider value={this.state}>
              <Header />
              
              <Suspense fallback={<div></div>}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/pay" component={PaymentDetails} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/login" component={Login} />
                  <Route path="/categories/:main/:sub?" 
                    exact 
                    render={(routerProps) => (<Categories cookies={this.props.cookies} {...routerProps} /> )} 
                  />
                  <Route path="/categories/:main/:sub/:productname" component={Product} />
                </Switch>
                <Footer />
              </Suspense>
            </CartUserContext.Provider>
        </BrowserRouter>
    );
  }
}

export default App;
