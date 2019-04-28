import React, { Component } from 'react';
import './CartTableRow.css';
import QuantitySelector from '../AllPages/QuantitySelector';

class CartTableRow extends Component {

  updateQuantity = (chosenQty, cartItemId) => {
		this.props.changeQtyClick(chosenQty, cartItemId)
  }
  deleteItem = (cartItemIndex, cartItemSize) => {
		this.props.removeBtnClick(cartItemIndex, cartItemSize);
  }
  render() {
		let cartItem = this.props.productData;
    return (
			<div className="cart-table-row">
				<div className="col-2">
					<img src={`${process.env.PUBLIC_URL}/images/${cartItem.product.category}/${cartItem.product.subcategory}/${cartItem.product.images[0]}`} alt="cart item"></img>
				</div>
				<div className="col-4">
					<div>
						<h2>{cartItem.product.name}</h2>
						<h2 className="product-color">{cartItem.product.color}</h2>
						<h2 className="product-size">Size: {cartItem.size}</h2>
						<h2>${cartItem.product.price}</h2>
					</div>
				</div>
				<div className="col-2">
					<QuantitySelector 
						setQuantity={this.updateQuantity} 
						productId={cartItem.productId} 
						initialQty={cartItem.quantity}
					/>
					<button className="remove-item" onClick={this.deleteItem.bind(this, cartItem.productId, cartItem.size)}>Remove</button>
				</div>
				<div className="col-4">
					<h2 className="product-total text-align-right">
						${cartItem.product.price * cartItem.quantity}
					</h2>
				</div>
			</div>
    );
  }
}
export default CartTableRow;
