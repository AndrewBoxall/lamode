import React, { Component } from 'react';
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
		let informationForm = [];
		if (this.state.billingInfo) {
			informationForm.push(<BillingInformation />);
		} else {
			informationForm.push(<ContactInformation />);
			informationForm.push(<ShippingInformation />);
		}
    return (
		<div id="checkout-page">
			<div className="main-container">
				<CheckoutProgress />
				{informationForm}
			</div>

			<CheckoutCartSummary />
		</div>
    );
  }
}
export default Checkout;