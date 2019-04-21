import React, { Component } from 'react';
import './QuantitySelector.css';

class QuantitySelector extends Component {
  constructor(props){
	super(props);

	this.state = {
		quantityValue: this.props.initialQty || 1
	};
  }
  increaseQty = () => {
		let oldQtyValue = this.state.quantityValue;
		let newQtyValue;

		if (oldQtyValue < 15) {
			newQtyValue = oldQtyValue + 1;
		} else {
			newQtyValue = 15;
		}
		this.setState({quantityValue: newQtyValue});
		this.props.setQuantity(newQtyValue, this.props.productId);
  }
  decreaseQty = () => {
		let oldQtyValue = this.state.quantityValue;
		let newQtyValue;

		if (oldQtyValue > 1) {
			newQtyValue = oldQtyValue - 1;
		} else {
			newQtyValue = 1;
		}
		this.setState({quantityValue: newQtyValue});
		this.props.setQuantity(newQtyValue, this.props.productId);
  }
  render() {
    return (
		<div className="quantity-selector">
			<input 
				className="qty-subtract" 
				type="button" 
				value="-"
				onClick={this.decreaseQty}>
			</input>
			<input 
				className="qty-val" 
				type="number" 
				value={this.state.quantityValue} 
				min="1" 
				max="15" 
				name="quantity" 
				readOnly>
			</input>
			<input 
				className="qty-add" 
				type="button" 
				value="+"
				onClick={this.increaseQty}>
			</input>
		</div>
    );
  }
}
export default QuantitySelector;