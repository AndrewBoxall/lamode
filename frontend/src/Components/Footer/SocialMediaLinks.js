import React from 'react';
import { Link } from 'react-router-dom';
import './SocialMediaLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMediaLinks(props) {
    return (
		<div className="social-media-links">
			<h2>FOLLOW US</h2>
			<Link to="/about"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'facebook']} /></Link>
			<Link to="/about"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'instagram']} /></Link>
			<Link to="/about"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'twitter']} /></Link>
			<Link to="/about"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'snapchat']} /></Link>
			<Link to="/about"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'pinterest']} /></Link>
		</div>
	);
}
export default SocialMediaLinks;