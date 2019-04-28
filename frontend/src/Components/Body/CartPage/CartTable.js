import React, { Component } from 'react';
import './CartTable.css';
import {CartUserContext} from '../../../javascript/CartUserContext';
import CartTableRow from './CartTableRow';

class CartTable extends Component {
	constructor(props){
		super(props);
			
		this.state = {
			cartItems: this.props.cart
		};
	}
  static contextType = CartUserContext;
  
  selectQuantity = (chosenQty, cartItemId) => {
	let cartStateCopy = [...this.context.shoppingCart];
	let itemToUpdate = cartStateCopy.find(cartItems => cartItems.productId === cartItemId);
	itemToUpdate.quantity = chosenQty;

	this.context.updateCartItems(cartStateCopy);
  }
  removeItem = (cartItemId, cartItemSize) => {
	let cartStateCopy = [...this.context.shoppingCart];
	let entryToRemove = cartStateCopy.find((cartItem) => 
		cartItem.productId === cartItemId &&
		cartItem.size === cartItemSize);

	let indexToRemove = cartStateCopy.indexOf(entryToRemove);

	cartStateCopy.splice(indexToRemove, 1);

	this.context.updateCartItems(cartStateCopy);
  }
  render() {	
    return (
		<div id="cart-table">
			<div className="cart-table-header">
				<div className="col-1">ITEM</div>
				<div className="col-5"></div>
				<div className="col-2 text-align-center">QUANTITY</div>
				<div className="col-4 text-align-right">SUBTOTAL</div>
			</div>
			<div className="cart-table-body">
				{this.context.shoppingCart.map((aCartItem, index) => (
					<CartTableRow key={index} productData={aCartItem} removeBtnClick={this.removeItem} changeQtyClick={this.selectQuantity} />
				))}
			</div>
		</div>
    );
  }
}
export default CartTable;