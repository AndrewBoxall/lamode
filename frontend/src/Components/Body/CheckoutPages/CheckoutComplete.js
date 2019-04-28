import React, { Component } from 'react';
import './CheckoutComplete.css';
import CheckoutProgress from './CheckoutProgress';

class CheckoutComplete extends Component {
	render() {
		return (
			<div id="checkout-complete">
				<CheckoutProgress />
				<h2>Payment success!</h2>
				<p>Your order has been recieved and will be shipped within the next 3-5 working days.</p>
				<p>Order Summary:</p>

			</div>
		);
  	}
}
export default CheckoutComplete;