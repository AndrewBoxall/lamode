import React, { Component } from 'react';
import './AccountNav.css';
import { Link } from 'react-router-dom';
import cartIcon from '../../images/landingpage-nav-icons/cart-icon.jpg';
import userIcon from '../../images/landingpage-nav-icons/user-icon.svg';
import { CartUserContext } from '../../javascript/CartUserContext';

class AccountNav extends Component {
  static contextType = CartUserContext;
  
  render() {
    return (
			<div id="account-navigation">
        <Link className="account-nav-link" to="/login">
          <img src={userIcon} alt="user" title="Login or create account"></img>
        </Link>
        <Link id="header-cart-icon" to="/cart" title="Cart">
          <img src={cartIcon} alt="cart"></img>
          <span className="cart-items-counter">{this.context.shoppingCart.totalItems}</span>
        </Link>
			</div>
    );
  }
}
export default AccountNav;