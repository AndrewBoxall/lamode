import React from 'react';
import { Link } from 'react-router-dom';

import SharedNavColumn from './SharedNavColumn';
import NewReleasesColumn from './NewReleasesColumn';
import NewReleasesMens from '../../images/landingpage-nav-icons/new-releases-mens.jpg';

function MensDropdownNav(props) {
	return (
		<li id="mens-dropdown-nav">
			<div id="mens-categories" className="navigation-dropdown">
				<SharedNavColumn />
				<div className="dropdown-column">
					<h2>SHOP BY CATEGORY</h2>
					<ul className="shop-categories">
						<li><Link to="/categories/mens">All Mens</Link></li>
						<li><Link to="/categories/mens/tees">Tees</Link></li>
						<li><Link to="/categories/mens/shirts">Shirts</Link></li>
						<li><Link to="/categories/mens/hoodies">Hoodies</Link></li>
						<li><Link to="/categories/mens/shorts">Shorts</Link></li>
						<li><Link to="/categories/mens/longs">Longs</Link></li>
						<li><Link to="/categories/mens/shoes">Shoes</Link></li>
					</ul>
				</div>
				<div className="dropdown-column">
					<h2>SHOP BY COLLECTION</h2>
					<ul className="shop-categories">
						<li><Link to="/categories/mens/thegully">The Gully</Link></li>
						<li><Link to="/categories/mens/optic">Optic</Link></li>
						<li><Link to="/categories/mens/hazy">Hazy</Link></li>
						<li><Link to="/categories/mens/dark">Dark</Link></li>
						<li><Link to="/categories/mens/vision">Vision</Link></li>
						<li><Link to="/categories/mens/twodo">Twodo</Link></li>
						<li><Link to="/categories/mens/sandstone">Sandstone</Link></li>
					</ul>
				</div>
				<div className="flex-grow-1"></div>
				<NewReleasesColumn category={'mens'} image={NewReleasesMens} />
			</div>
			<Link className="navigation-link" to="/categories/mens">MENS</Link>
		</li>
	);
}
export default MensDropdownNav;