import React, { Component } from 'react';
import './BillingInformation.css';
import { Link } from 'react-router-dom';

class BillingInformation extends Component {
	constructor(props){
		super(props);

		this.state = {
			billingFirstName: null,
			billingLastName: null,
			billingAddress: null,
			billingAppartment: null,
			billingCity: null,
			billingProvince: null,
		};
	}
	goToPaymeny = (e) => {
		e.preventDefault();
	}
	updateField = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<form className="billing-information" onSubmit={this.goToPayment}>
					<h2>Billing Information</h2>
					<div className="data-input-container col-6">
						<input type="text" id="firstName" name="billingFirstName" autoComplete="off" required></input>
						<label for="billingFirstName">First Name</label>
					</div>
					<div className="data-input-container col-6">
						<input type="text" id="lastName" name="billingLastName" autoComplete="off" required></input>
						<label for="billingLastName">Last Name</label>
					</div>
					<div className="data-input-container col-12">
						<input type="text" id="address" name="billingAddress" autoComplete="off" required></input>
						<label for="billingAddress">Address</label>
					</div>
					<div className="data-input-container col-12">
						<input type="text" id="apartment" name="shippingAppartment" autoComplete="off" required></input>
						<label for="shippingAppartment">Apartment (optional)</label>
					</div>
					<div className="data-input-container col-12">
						<input type="text" id="city" name="billingCity" autoComplete="off" required></input>
						<label for="billingCity">City</label>
					</div>
					<div className="data-input-container col-6">
						<input type="text" id="stateProvince" name="billingProvince" autoComplete="off" required></input>
						<label for="billingProvince">State/Province</label>
					</div>
					<div className="data-input-container col-6">
						<input type="text" id="zip" name="zip" autoComplete="off" required></input>
						<label for="zip">Zip/Postal Code</label>
					</div>
					<div className="col-12">
						<Link to="/cart" className="return-link">Return to cart</Link>
						<button className="proceed-button" type="submit">Continue to payment</button>
					</div>
			</form>
		);
  	}
}
export default BillingInformation;