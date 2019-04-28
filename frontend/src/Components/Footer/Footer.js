import React, { Component } from 'react';
import './Footer.css';
import FooterHelpLinks from './FooterHelpLinks';
import NewsLetterSignup from './NewsLetterSignup';
import SocialMediaLinks from './SocialMediaLinks';

class Footer extends Component {
  render() {
    return (
		<footer id="website-footer">
			<div className="flex flex-wrap">
				<FooterHelpLinks />
				<NewsLetterSignup />
				<SocialMediaLinks />
			</div>
			<div className="copyright">COPYRIGHT 2018 | La Mode</div>
		</footer>
    );
  }
}

export default Footer;
