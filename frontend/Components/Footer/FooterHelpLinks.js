import React from 'react';
import { Link } from 'react-router-dom';
import './FooterHelpLinks.css';

function FooterHelpLinks(props) {
    return (
		<div className="footer-help-links">
			<Link to="/about">ABOUT</Link>
			<Link to="/fitguide">FIT GUIDE</Link>
			<Link to="/help">HELP / FAQ</Link>
			<Link to="/returns">SHIPPING & RETURNS</Link>
			<Link to="/contact">CONTACT</Link>
		</div>
	);
}
export default FooterHelpLinks;