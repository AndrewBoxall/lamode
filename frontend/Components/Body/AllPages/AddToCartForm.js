import React, { Component } from 'react';
import './AddToCartForm.css';
import QuantitySelector from './QuantitySelector';
import SizeSelector from './SizeSelector';
import {CartUserContext} from '../../../javascript/CartUserContext';

class AddToCartForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			product: this.props.product,
			size: null,
			quantity: 1,
			triedToAdd: false
		}
	}
	static contextType = CartUserContext;

	addItemToCart = (e) => {
		e.preventDefault();
		if (this.state.size){
			this.context.addToShoppingCart(this.state.product._id, this.state.product, this.state.size, this.state.quantity);
		} else {
			this.setState({triedToAdd: true});
		}
	}
	selectSize = (chosenSize) => {
		this.setState({size: chosenSize});
	}
	selectQuantity = (chosenQty) => {
		this.setState({quantity: chosenQty});
	}
	render() {
		let sizeNeeded = <div className="select-size-popup">Please select a size</div>
		return (
			<form id="add-to-cart-form" onSubmit={this.addItemToCart}>
				<p>SIZE</p>
				<SizeSelector sizes={this.state.product.stock} setSize={this.selectSize} />
				{!this.state.size && this.state.triedToAdd && sizeNeeded}

				<p>QUANTITY</p>
				<QuantitySelector setQuantity={this.selectQuantity} />

				<button type="submit" className="add-to-cart col-lg-12 uppercase">Add to cart</button>
			</form>
		);
	}
}
export default AddToCartForm;
