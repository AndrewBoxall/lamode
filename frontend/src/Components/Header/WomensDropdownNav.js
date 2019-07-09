import React from 'react';
import { Link } from 'react-router-dom';
import SharedNavColumn from './SharedNavColumn';
import NewReleasesColumn from './NewReleasesColumn';
import NewReleasesWomens from '../../images/landingpage-nav-icons/new-releases-womens.jpg';

function WomensDropdownNav(props) {
	return (
		<li id="womens-dropdown-nav">
			<div id="womens-categories" className="navigation-dropdown">
				<SharedNavColumn />
				<div className="dropdown-column">
					<h2>SHOP BY CATEGORY</h2>
					<ul className="shop-categories uppercase">
						<li><Link to="/categories/womens">All Womens</Link></li>
						<li><Link to="/categories/womens/dresses">Dresses</Link></li>
						<li><Link to="/categories/womens/tops">Tops</Link></li>
						<li><Link to="/categories/womens/leggings">Leggings</Link></li>
						<li><Link to="/categories/womens/shorts">Shorts</Link></li>
						<li><Link to="/categories/womens/footwear">Footwear</Link></li>
					</ul>
				</div>
				<div className="dropdown-column">
					<h2>SHOP BY COLLECTION</h2>
					<ul className="shop-categories uppercase">
						<li><Link to="/categories/womens/thevalley">The Valley</Link></li>
						<li><Link to="/categories/womens/hazey">Hazey</Link></li>
						<li><Link to="/categories/womens/summer">Summer</Link></li>
						<li><Link to="/categories/womens/snow">Snow</Link></li>
						<li><Link to="/categories/womens/dede">DeDe</Link></li>
						<li><Link to="/categories/womens/contemporary">Contemporary</Link></li>
					</ul>
				</div>
				<div className="flex-grow-1"></div>
				<NewReleasesColumn category={'womens'} image={NewReleasesWomens} />
			</div>
			<Link className="navigation-link" to="/categories/womens">WOMENS</Link>
		</li>
	);
}
export default WomensDropdownNav;