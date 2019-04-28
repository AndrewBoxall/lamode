import React, { Component } from 'react';
import './ShippingInformation.css';
import { Link } from 'react-router-dom';

class ShippingInformation extends Component {
  constructor(props){
	  super(props);

	  this.state = {
			shippingFirstName: null,
			shippingLastName: null,
			shippingAddress: null,
			shippingAppartment: null,
			shippingCity: null,
			shippingProvince: null,
			shippingZipCode: null
	  }
	}
	goToBilling = (e) => {
		e.preventDefault();
	}
	updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
		<div id="shipping-information">
			<h2>Shipping Information</h2>
			<form className="card-details" onSubmit={this.goToBilling}>
				<div className="data-input-container col-6">
					<input type="text" id="first-name" name="shippingFirstName" required></input>
					<label for="shippingFirstName">First Name</label>
				</div>
				<div className="data-input-container col-6">
					<input type="text" id="last-name" name="shippingLastName" required></input>
					<label for="shippingLastName">Last Name</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="address" name="shippingAddress" required></input>
					<label for="shippingAddress">Address</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="apartment" name="shippingAppartment"></input>
					<label for="shippingAppartment">Apartment (optional)</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="city" name="shippingCity" required></input>
					<label for="shippingCity">City</label>
				</div>

				<div className="data-input-container col-5">
					<input type="text" id="state-province" name="shippingProvince" required></input>
					<label for="shippingProvince">Region</label>
				</div>
				<div className="data-input-container col-4">
					<input type="text" id="zip" name="shippingZipCode" required></input>
					<label for="shippingZipCode">Postal Code</label>
				</div>
				<div className="col-12">
					<Link to="/cart" className="return-link">Return to cart</Link>
					<button className="proceed-button" type="submit">Continue to shipping method</button>
				</div>
			</form>
		</div>
    );
  }
}
export default ShippingInformation;