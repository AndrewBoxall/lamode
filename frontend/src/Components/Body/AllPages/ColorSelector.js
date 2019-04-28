import React, { Component } from 'react';
import './ColorSelector.css';

class ColorSelector extends Component {
  
  render() {
    return (
			<div className="color-selector">
				<label htmlFor="color-1" className="product-color">
					<input id="color-1" type="radio" name="color"></input>
					<span id="color-check-1" className="color-select-check"></span>
				</label>
				<label htmlFor="color-2" className="product-color">
					<input id="color-2" type="radio" name="color"></input>
					<span id="color-check-2" className="color-select-check"></span>
				</label>
				<label htmlFor="color-3" className="product-color">
					<input id="color-3" type="radio" name="color"></input>
					<span id="color-check-3" className="color-select-check"></span>
				</label>
				<label htmlFor="color-4" className="product-color">
					<input id="color-4" type="radio" name="color"></input>
					<span id="color-check-4" className="color-select-check"></span>
				</label>
				<label htmlFor="color-5" className="product-color">
					<input id="color-5" type="radio" name="color"></input>
					<span id="color-check-5" className="color-select-check"></span>
				</label>
			</div>
    );
  }
}

export default ColorSelector;
