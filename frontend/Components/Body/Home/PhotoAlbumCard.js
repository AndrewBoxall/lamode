import React from 'react';
import './PhotoAlbumCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PhotoAlbumCard(props) {
    return (
		<div className={`instagram-grid-item-${props.itemNumber}`}>
			<img src={props.cardImage} alt="shop clothing as seen from instagram"></img>
			<div>
				<FontAwesomeIcon className="instagram-grid-icon" icon={['fab', 'instagram']} />
				<p>SHOP THE LOOK</p>
			</div>
		</div>
    );
}
export default PhotoAlbumCard;