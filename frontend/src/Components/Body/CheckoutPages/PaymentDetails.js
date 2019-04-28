import React, { Component } from 'react';
import './PaymentDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PaymentDetails extends Component {
	constructor(props){
		super(props);

		this.state = {
			cardType: null,
			cardNumber: null,
			cardExpiration: null,
			cardCvn: null
		};
	}
	chargePayment = (e) => {
		e.preventDefault();
	}
	updateField = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<form id="payment-details" action="/confirm-purchase" method="post" onSubmit={this.chargePayment}>
				<h2>PAYMENT DETAILS</h2>
				
				<label for="cardType">Card Type</label>
				<div className="accepted-payment">
					<input type="radio" name="cardType" value={this.state.cardType}></input>
					<FontAwesomeIcon className="credit-card__icon" icon={['fab', 'cc-visa']} />
					<input type="radio" name="cardType" value={this.state.cardType}></input>
					<FontAwesomeIcon className="credit-card__icon" icon={['fab', 'cc-stripe']} />
					<input type="radio" name="cardType" value={this.state.cardType}></input>
					<FontAwesomeIcon className="credit-card__icon" icon={['fab', 'cc-paypal']} />
					<input type="radio" name="cardType" value={this.state.cardType}></input>
					<FontAwesomeIcon className="credit-card__icon" icon={['fab', 'cc-amex']} />
					<input type="radio" name="cardType" value={this.state.cardType}></input>
					<FontAwesomeIcon className="credit-card__icon" icon={['fab', 'cc-mastercard']} />
				</div>
				<label for="cardNumber">Card Number</label>
				<input type="text" name="cardNumber" autoComplete="off" value={this.state.cardNumber} required></input>
				<div className="flex">
					<div className="col-12">
						<label for="cardExpiration">Expiration Date</label>
						<input type="date" name="cardExpiration" autoComplete="off" value={this.state.cardExpiration} required></input>
					</div>	
					<div className="col-12">
						<label for="cvn">CVN</label>
						<input type="password" name="cvn" value={this.state.cardCvn} required></input>
						<p className="text-align-right">This code is a 3 or 4 digit number printed on the back or front of credit cards.</p>
					</div>
				</div>
				<button className="confirm-purchase" type="submit">PAY NOW</button>
			</form>
		);
  	}
}
export default PaymentDetails;