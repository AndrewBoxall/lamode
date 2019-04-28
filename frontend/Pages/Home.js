import React, { Component } from 'react';
import './Home.css';

import PromotionalBanner from '../Components/Body/Home/PromotionalBanner';
import PhotoAlbum from '../Components/Body/Home/PhotoAlbum';
import CategoryCard from '../Components/Body/Home/CategoryCard';

import mens1 from '../images/mens9.jpg';
import womens1 from '../images/womens8.jpg';
import womens2 from '../images/womens2.jpg';

class Home extends Component {
  render() {
    return (
      <>
        <PromotionalBanner />
				<div className="category-card-container flex flex-wrap">
					<CategoryCard link={"/categories/mens"} text={"Men's Clothing"}>
						<img src={mens1} alt="Mens clothing card"></img>
					</CategoryCard>
					<CategoryCard link={"/categories/womens"} text={"Women's Clothing"}>
						<img src={womens1} alt="Womens clothing card"></img>
					</CategoryCard>
					<CategoryCard link={"/categories/footwear"} text={"Shoes and Footwear"}>
						<img src={womens2} alt="Shoes and Footwear card"></img>
					</CategoryCard>
				</div>
        <PhotoAlbum />
      </>
    );
  }
}
export default Home;
