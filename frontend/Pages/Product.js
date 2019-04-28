import React, { Component } from 'react';
import './Product.css';
import getProducts from '../javascript/getProducts.js';

import LoadingSpinner from '../Components/Body/AllPages/LoadingSpinner';
import AddToCartForm from '../Components/Body/AllPages/AddToCartForm';

class Product extends Component {
  constructor(props){
	  super(props);

	  this.state = {
			product: null,
		};
  }
  async componentDidMount(){
			let productName = this.props.match.params.productname;	
			let fetchUrl = `http://localhost:3000/lamode/categories/any/any/${productName}`;
			let data;
			
			data = await getProducts(fetchUrl);

			this.setState({product: data});
	}
	
	constructImages(){
		let imageStructure = [];
		let imagePath = `${process.env.PUBLIC_URL}/images/${this.state.product.category}/${this.state.product.subcategory}/`;

		for (var i = 0; i < 4; i++){
			if (i < 2) {
				imageStructure.push(
					<img className="main-picture col-lg-6 col-sm-1 col-xs-2" 
						src={imagePath + this.state.product.images[i]} alt="shorts">
					</img>
				);
			} else {
				imageStructure.push(
					<img className="alt-picture" 
						src={imagePath + this.state.product.images[i]} alt="shorts">
					</img>		
				);
			}
		}
		return imageStructure;
	}
  render() {
	if(!this.state.product) {
		return <LoadingSpinner />
	}
    return (
		<div>	
			<div className="product-images-container">
				{this.constructImages()}
			</div>

			<div className="product-info-container col-lg-5 col-xs-2">
				<h2 className="product-title uppercase">{this.state.product.name}</h2>
				<h3 className="product-price">${this.state.product.price}.00 NZD</h3>
				<p className="product-description">
						{this.state.product.description}
				</p>
				<ul className="product-features">
				{this.state.product.features.map(aFeature => (
						<li>{aFeature}</li>
					))
				}
				</ul>
				<AddToCartForm product={this.state.product}/>
			</div>
		</div>
    );
  }
}

export default Product;
