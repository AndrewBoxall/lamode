import React from 'react';
import './CheckoutProgress.css';

function CheckoutProgress(props) {
	return (
		<div className="checkout-progress">
			<p>CART > </p>
			<p>Customer & Shipping Information > </p>
			<p>Billing Information > </p>
			<p>Success!!</p>
		</div>
	);
}
export default CheckoutProgress;