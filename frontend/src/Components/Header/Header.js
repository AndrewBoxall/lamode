import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AccountNav from './AccountNav';
import MainNav from './MainNav';

import websiteLogo from '../../images/landingpage-sitelogo/lamode-logo.jpg';

class Header extends Component {
  render() {
    return (
        <header>
    			<div id="website-header">
    				<Link to="/">
    					<img id="website-logo" src={websiteLogo} alt="LaMode logo"></img>
    				</Link>
    				<AccountNav />
  			  </div>
          <MainNav />
        </header>
    );
  }
}
export default Header;