import React, { Component } from 'react';
import './MainNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MensDropdownNav from './MensDropdownNav';
import ShoesDropdownNav from './ShoesDropdownNav';
import WomensDropdownNav from './WomensDropdownNav';

function MainNav(props) {
	return (
		<ul id="main-navigation">
			<MensDropdownNav />
			<WomensDropdownNav />
			<ShoesDropdownNav />
			<li className="search-container">
				<input type="text" id="search-filter" placeholder="Search.."></input>
				<FontAwesomeIcon className="icon-search" icon={['fas', 'search']} />
			</li>
		</ul>
	);
}
export default MainNav;