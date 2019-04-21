import React, { Component } from 'react';
import './BillingInformation.css';

class BillingInformation extends Component {
	constructor(props){
		super(props);

		this.state = {
			billingFirstName: null,
			billingLastName: null,
			billingAddress: null,
			billingCity: null,
			billingProvince: null,
			cardType: null,
			cardNumber: null,
			cardExpiration: null,
			cvn: null
		};
	}
	updateField = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<div className="billing-information">
				<form action="/confirm-purchase" method="post">
					<div>
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
						<h2>Payment Details</h2>
						<div className="data-input-container col-12">
							<input type="text" id="cardType" name="cardType" autoComplete="off" required></input>
							<label for="cardType">Card Type</label>
						</div>
						<div className="data-input-container col-12">
							<input type="text" id="cardNumber" name="cardNumber" autoComplete="off" required></input>
							<label for="cardNumber">Card Number</label>
						</div>
						<div className="data-input-container col-6">
							<input type="text" id="cardExpiration" name="cardExpiration" autoComplete="off" required></input>
							<label for="cardExpiration">Expiration Date</label>
						</div>
					
						<div className="data-input-container col-6">
							<input type="text" id="cvn" name="cvn" required></input>
							<label for="cvn">CVN</label>
							<p className="text-align-right">This code is a 3 or 4 digit number printed on the back or front of credit cards.</p>
						</div>
					</div>
					<button className="confirm-purchase" type="submit">CONFIRM PURCHASE</button>
					<button className="cancel-order" type="submit">CANCEL ORDER</button>
				</form>
			</div>
		);
  	}
}
export default BillingInformation;