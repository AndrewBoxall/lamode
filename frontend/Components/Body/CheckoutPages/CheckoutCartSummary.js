import React, { Component } from 'react';
import './CheckoutCartSummary.css';
import {shoppingCart} from '../../../javascript/shoppingCart.js';
import { CartUserContext } from '../../../javascript/CartUserContext';

class CheckoutCartSummary extends Component {
  constructor(props){
	  super(props);

		this.state = {
			cartItems: shoppingCart.cartItems
		};
	}
	static contextType = CartUserContext;
  render() {
    return (
			<div className="checkout-cart-summary">
				<div className="grid-header">
					<div className="col-8">ITEM</div>
					<div className="col-4 text-align-right">SUBTOTAL</div>
				</div>
				{this.state.cartItems.map((aCartItem) => (
					<div className="cart-item-container">
						<div className="position-relative col-2">
							<img src={`${process.env.PUBLIC_URL}/images/${aCartItem.product.category}/${aCartItem.product.subcategory}/${aCartItem.product.images[0]}`} alt="Product in the cart"></img>
							<span className="qty-badge">{aCartItem.quantity}</span>
						</div>
						<div className="col-8">
							<div>{aCartItem.product.name}</div>
							<div className="item-color">{aCartItem.product.color}</div>
							<div>{aCartItem.size}</div>
						</div>
						<div className="col-2 text-align-right">${aCartItem.product.price * aCartItem.quantity}</div>
					</div>
				))}
				<div className="cart-totals">
					<div className="col-6">Shipping</div>
					<div className="col-6 text-align-right">Calculated at next step</div>
					<div className="col-6">TOTAL</div>
					<div className="col-6 text-align-right">$500 NZD</div>
				</div>
			</div>
    );
  }
}
export default CheckoutCartSummary;