import React, { Component } from 'react';
import './SizeSelector.css';

class SizeSelector extends Component {
	constructor(props){
		super(props);

		this.state = {
			stock: this.props.sizes
		}
	}
	selectThisSize = (e) => {
		this.props.setSize(e.target.value);
	}
  
  render() {
    return (
			<div className="size-selector">
				{this.state.stock.map(aStock => (
						<label htmlFor={`size-${aStock.size}`} className="product-size">
							<input id={`size-${aStock.size}`} type="radio" name="size" value={aStock.size} onClick={this.selectThisSize}></input>
							<span className="size-select-check">
								<p className={`stock-${aStock.quantity}`}>{aStock.size}</p>
							</span>
						</label>
				))}
			</div>
    );
  }
}

export default SizeSelector;
