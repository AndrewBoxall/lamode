import React, { Component } from 'react';
import './ContactInformation.css';


class ContactInformation extends Component {
  constructor(props){
	  super(props);

	  this.state = {
			contactEmail: null,
			phoneNum: null
	  }
	}
	updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
		<div className="contact-information">
			<h2>Contact Information</h2>
				<div className="data-input-container col-12">
					<input type="text" id="email" name="contactEmail" autoComplete="off" value={this.state.contactEmail} onChange={this.updateField}required></input>
					<label for="contactEmail">Email</label>
				</div>
				<div className="data-input-container col-12">
					<input type="text" id="phone" name="phoneNum" autoComplete="off" required></input>
					<label for="phoneNum">Phone</label>
				</div>
		</div>
    );
  }
}

export default ContactInformation;
