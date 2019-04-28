import React, { Component } from 'react';
import './PhotoAlbum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoAlbumCard from './PhotoAlbumCard';

import mens2 from '../../../images/mens2.jpg';
import mens3 from '../../../images/mens3.jpg';
import mens4 from '../../../images/mens4.jpg';
import mens7 from '../../../images/mens7.jpg';
import womens3 from '../../../images/womens3.jpg';
import womens4 from '../../../images/womens4.jpg';
import womens5 from '../../../images/womens5.jpg';
import womens6 from '../../../images/womens6.jpg';
import womens7 from '../../../images/womens7.jpg';

class PhotoAlbum extends Component {
  render() {
    return (
		<div id="photo-album">
			<div id="banner-msg">
				<h2>SHOP OUR INSTAGRAM LOOKS</h2>
				<FontAwesomeIcon className="instagram-icon" icon={['fab', 'instagram']} />
			</div>
			<div className="shop-instagram-grid">
				<PhotoAlbumCard itemNumber={1} cardImage={mens2} />
				<PhotoAlbumCard itemNumber={2} cardImage={mens3} />
				<PhotoAlbumCard itemNumber={3} cardImage={womens3} />
				<PhotoAlbumCard itemNumber={4} cardImage={womens6} />
				<PhotoAlbumCard itemNumber={5} cardImage={mens4} />
				<PhotoAlbumCard itemNumber={6} cardImage={womens4} />
				<PhotoAlbumCard itemNumber={7} cardImage={mens7} />
				<PhotoAlbumCard itemNumber={8} cardImage={womens5} />
				<PhotoAlbumCard itemNumber={9} cardImage={womens7} />
			</div>
		</div>
    );
  }
}
export default PhotoAlbum;