import React, { Component } from 'react';
import './AccountNav.css';
import { Link } from 'react-router-dom';
import cartIconImage from '../../images/bag-icon.jpg';
import checkoutIconImage from '../../images/circlecheckout.png';
import userIconImage from '../../images/user.svg';
import {CartUserContext} from '../../javascript/CartUserContext';

class AccountNav extends Component {
  static contextType = CartUserContext;
  render() {
    return (
			<div id="account-navigation">
        <Link className="account-nav-link" to="/login">
          <img src={userIconImage} alt="user" title="Login or create account"></img>
        </Link>
        <Link id="header-cart-icon" to="/cart" title="Cart">
          <img src={cartIconImage} alt="cart"></img>
          <span className="cart-items-counter">{this.context.shoppingCart.length}</span>
        </Link>
			</div>
    );
  }
}
export default AccountNav;
