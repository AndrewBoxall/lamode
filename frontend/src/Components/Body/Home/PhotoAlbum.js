import React, { Component } from 'react';
import './PhotoAlbum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoAlbumCard from './PhotoAlbumCard';

import instagram1L from '../../../images/landingpage-instagram-looks/instagram1-large.jpg';
import instagram2M from '../../../images/landingpage-instagram-looks/instagram2-medium.jpg';
import instagram3S from '../../../images/landingpage-instagram-looks/instagram3-small.jpg';
import instagram4S from '../../../images/landingpage-instagram-looks/instagram4-small.jpg';
import instagram5M from '../../../images/landingpage-instagram-looks/instagram5-medium.jpg';
import instagram6S from '../../../images/landingpage-instagram-looks/instagram6-small.jpg';
import instagram7S from '../../../images/landingpage-instagram-looks/instagram7-small.jpg';
import instagram8M from '../../../images/landingpage-instagram-looks/instagram8-medium.jpg';
import instagram9M from '../../../images/landingpage-instagram-looks/instagram9-medium.jpg';

class PhotoAlbum extends Component {
  render() {
    return (
		<div id="photo-album">
			<div id="banner-msg">
				<h2>SHOP OUR INSTAGRAM LOOKS</h2>
				<FontAwesomeIcon className="instagram-icon" icon={['fab', 'instagram']} />
			</div>
			<div className="shop-instagram-grid">
				<PhotoAlbumCard itemNumber={1} cardImage={instagram1L} />
				<PhotoAlbumCard itemNumber={2} cardImage={instagram2M} />
				<PhotoAlbumCard itemNumber={3} cardImage={instagram3S} />
				<PhotoAlbumCard itemNumber={4} cardImage={instagram4S} />
				<PhotoAlbumCard itemNumber={5} cardImage={instagram5M} />
				<PhotoAlbumCard itemNumber={6} cardImage={instagram6S} />
				<PhotoAlbumCard itemNumber={7} cardImage={instagram7S} />
				<PhotoAlbumCard itemNumber={8} cardImage={instagram8M} />
				<PhotoAlbumCard itemNumber={9} cardImage={instagram9M} />
			</div>
		</div>
    );
  }
}
export default PhotoAlbum;