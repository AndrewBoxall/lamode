import React from 'react';
import './NewsLetterSignup.css';

function NewsLetterSignup(props) {
    return (
		<div className="news-letter-signup">
			<p>SIGN UP TO OUR EMAIL LIST & RECEIVE THE LATEST NEWS, UPDATES AND DISCOUNTS</p>
			<div className="flex">
				<input type="text" className="email-signup" placeholder="EMAIL ADDRESS"></input>
				<button type="button" className="confirm-signup">SUBSCRIBE</button>
			</div>
		</div>
	);
}
export default NewsLetterSignup;