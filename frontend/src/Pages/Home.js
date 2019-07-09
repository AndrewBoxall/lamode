import React, { Component } from 'react';
import './Home.css';
/* import components */
import PromotionalBanner from '../Components/Body/Home/PromotionalBanner';
import PhotoAlbum from '../Components/Body/Home/PhotoAlbum';
import CategoryCard from '../Components/Body/Home/CategoryCard';
/* import images */
import categoryMens from '../images/category-mens.jpg';
import categoryWomens from '../images/category-womens.jpg';
import categoryAcc from '../images/category-accessories.jpg';

class Home extends Component {
  render() {
    return (
      <>
        <PromotionalBanner />
			<div className="category-card-container flex flex-wrap">
				<CategoryCard link={"/categories/mens"} text={"Men's Clothing"}>
					<img src={categoryMens} alt="Mens clothing card"></img>
				</CategoryCard>
				<CategoryCard link={"/categories/womens"} text={"Women's Clothing"}>
					<img src={categoryWomens} alt="Womens clothing card"></img>
				</CategoryCard>
				<CategoryCard link={"/categories/footwear"} text={"Shoes and Footwear"}>
					<img src={categoryAcc} alt="Shoes and Footwear card"></img>
				</CategoryCard>
			</div>
        <PhotoAlbum />
      </>
    );
  }
}
export default Home;