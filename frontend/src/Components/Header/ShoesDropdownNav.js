import React from 'react';
import { Link } from 'react-router-dom';

import SharedNavColumn from './SharedNavColumn';
import NewReleasesColumn from './NewReleasesColumn';
import NewReleasesShoes from '../../images/landingpage-nav-icons/new-releases-shoes.jpg';

function ShoesDropdownNav(props) {
	return (
		<li id="shoes-dropdown-nav">
			<div id="shoes-categories" className="navigation-dropdown">
				<SharedNavColumn />
				<div className="dropdown-column">
					<h2>SHOP BY CATEGORY</h2>
					<ul className="shop-categories uppercase">
						<li><Link to="/categories/shoes">All Shoes</Link></li>
						<li><Link to="/categories/mens/shoes">Mens</Link></li>
						<li><Link to="/categories/womens/shoes">Womens</Link></li>
					</ul>
				</div>
				<div className="dropdown-column">
					<h2>SHOP BY COLLECTION</h2>
					<ul className="shop-categories uppercase">
						<li><Link to="/categories/womens">All Womens</Link></li>
						<li><Link to="/categories/womens/dresses">Dresses</Link></li>
						<li><Link to="/categories/womens/tops">Tops</Link></li>
						<li><Link to="/categories/womens/leggings">Leggings</Link></li>
						<li><Link to="/categories/womens/shorts">Shorts</Link></li>
						<li><Link to="/categories/womens/footwear">Footwear</Link></li>
					</ul>
				</div>
				<div className="flex-grow-1"></div>
				<NewReleasesColumn category={'shoes'} image={NewReleasesShoes} />
			</div>
			<Link className="navigation-link" to="/categories/shoes">SHOES</Link>
		</li>
	);
}
export default ShoesDropdownNav;