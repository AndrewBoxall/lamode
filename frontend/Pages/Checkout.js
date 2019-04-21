import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './Checkout.css';

import CheckoutCartSummary from '../Components/Body/CheckoutPages/CheckoutCartSummary';
import CheckoutProgress from '../Components/Body/CheckoutPages/CheckoutProgress';
import ContactInformation from '../Components/Body/CheckoutPages/ContactInformation';

import ShippingInformation from '../Components/Body/CheckoutPages/ShippingInformation';

import BillingInformation from '../Components/Body/CheckoutPages/BillingInformation';

class Checkout extends Component {
  constructor(props){
	  super(props);

	  this.state = {
			imagePath: 'checkoutImage.jpg',
			productName: 'productName',
			productPrice: 'productPrice',
			shippingInfo: true,
			shippingMethod: 'true',
			billingInfo: null,
			billingMethod: 'true'
		}
		this.goToBilling = this.goToBilling.bind(this);
	}
	goToBilling(){
		this.setState({billingInfo: true});
	}
  render() {
		let informationForm;
		if (this.state.billingInfo) {
			informationForm = <BillingInformation />;
		} else {
			
			informationForm = <ShippingInformation />;
		}

    return (
		<div className="checkout-content">
			<div className="main-container">
				<CheckoutProgress />
				<ContactInformation />
				{informationForm}
				{!this.state.billingInfo &&
					<div className="col-12">
						<Link to="/cart" className="return-link">Return to cart</Link>
						<button className="proceed-button" onClick={this.goToBilling}>Continue to shipping method</button>
					</div>
				}
			</div>

			<CheckoutCartSummary />
		</div>

    );
  }
}

export default Checkout;
