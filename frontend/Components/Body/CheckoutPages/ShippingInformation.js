import React, { Component } from 'react';
import './ShippingInformation.css';

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
	updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
		<div className="shipping-information">
			<h2>Shipping Information</h2>
			<form className="card-details" action="/confirm-purchase" method="post" autoComplete="on">
				<div className="data-input-container col-6">
					<input type="text" id="first-name" name="shippingFirstName" autoComplete="off" required></input>
					<label for="shippingFirstName">First Name</label>
				</div>
				<div className="data-input-container col-6">
					<input type="text" id="last-name" name="shippingLastName" autoComplete="off" required></input>
					<label for="shippingLastName">Last Name</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="address" name="shippingAddress" autoComplete="off" required></input>
					<label for="shippingAddress">Address</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="apartment" name="shippingAppartment" autoComplete="off" required></input>
					<label for="shippingAppartment">Apartment (optional)</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="city" name="shippingCity" autoComplete="off" required></input>
					<label for="shippingCity">City</label>
				</div>

				<div className="data-input-container col-5">
					<input type="text" id="state-province" name="shippingProvince" autoComplete="off" required></input>
					<label for="shippingProvince">Region</label>
				</div>
				<div className="data-input-container col-4">
					<input type="text" id="zip" name="shippingZipCode" autoComplete="off" required></input>
					<label for="shippingZipCode">Postal Code</label>
				</div>
			</form>
		</div>
    );
  }
}

export default ShippingInformation;
