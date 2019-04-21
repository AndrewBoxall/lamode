import React, { Component } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import {CartUserContext} from '../javascript/CartUserContext';
import CartTable from '../Components/Body/CartPage/CartTable';

class Cart extends Component {
  static contextType = CartUserContext;
  render() {
    return (
		<div id="cart-page">
			<h1>CART</h1>
			{this.context.totalPrice > 100 && this.context.shoppingCart.length > 0 &&
				<div id="highlight-shipping">{this.context.shipping}</div>
			}
			{this.context.shoppingCart.length > 0 &&	
				<>
					<CartTable cart={this.context.shoppingCart} />
					<div className="cart-page-totals">
						<p>TOTAL</p>
						<p className="text-align-right">${this.context.totalPrice} NZD</p>
					</div>
					<div className="cart-page-totals">
						<p>Shipping calculated at checkout</p>
						<Link id="cart-checkout-btn" to="/checkout">CHECKOUT</Link>
					</div>
				</>
			}	
			{this.context.shoppingCart.length <= 0 &&
				<h1>NO ITEMS IN CART</h1>
			}
		</div>
    );
  }
}

export default Cart;
