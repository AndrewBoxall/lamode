import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutProgress.css';

function CheckoutProgress(props) {
	return (
		<ul className="checkout-progress">
			<li><Link to="/cart">Cart</Link></li>
			<li>></li>
			<li><Link to="/checkout">Shipping Information</Link></li>
			<li>></li>
			<li><Link to="/checkout">Billing Information</Link></li>
			<li>></li>
			<li><Link to="/payment">Payment</Link></li>
			<li>></li>
			<li><Link to="/postpayment">Complete </Link></li>
		</ul>
	);
}
export default CheckoutProgress;