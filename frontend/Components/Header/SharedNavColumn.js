import React from 'react';
import { Link } from 'react-router-dom';

function SharedNavColumn(props) {
    return (
		<div className="dropdown-column">
			<ul className="shop-categories">
				<li><Link to="/categories/accessories">ACCESSORIES</Link></li>
				<li><Link to="/categories/giftcards">GIFT CARD</Link></li>
				<li><Link to="/categories/new">NEW RELEASES</Link></li>
				<li><Link to="/categories/all">SHOP ALL</Link></li>
			</ul>
		</div>
	);
}
export default SharedNavColumn;