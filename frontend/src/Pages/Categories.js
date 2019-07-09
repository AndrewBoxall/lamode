import React, { Component } from 'react';
import './Categories.css';
import getProducts from '../javascript/getProducts.js';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Components/Body/AllPages/LoadingSpinner';

class Categories extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'testname',
      color: 'testcolor',
      price: '$19.99test',
      products: null,
      category: null
    };
  }
  componentDidMount(){
    this.displayProducts();
  }
  componentDidUpdate(prevProps){
    if (this.props.match.params !== prevProps.match.params) {
      this.displayProducts();
    }
  }
  async displayProducts(){
    let mainCategory = this.props.match.params.main;
    let subCategory = this.props.match.params.sub;
    let fetchUrl;

    if(subCategory){
      fetchUrl = `http://localhost:80/lamode/categories/${mainCategory}/${subCategory}`;
    } else {
      fetchUrl = `http://localhost:80/lamode/categories/${mainCategory}`;
    }
    let data;
    data = await getProducts(fetchUrl);
    this.setState({products: data});
  }
  render() {
    if(!this.state.products) {
      return <LoadingSpinner />
    }
    return (
      <div id="categories-flex-container">
        {this.state.products.map((aProduct, index) => (
            <div className="product-preview-container" key={index}>
              <Link className="product-container-link" to={{
                    pathname: `/categories/${aProduct.category}/${aProduct.subcategory}/${aProduct.link}`,
                    }}>
              </Link>
              <div className="product-image-container">
                <img className="product-image" 
                  src={`${process.env.PUBLIC_URL}/images/${aProduct.category}/${aProduct.subcategory}/${aProduct.images[0]}`} 
                  alt="product">
                </img>
                <div className="product-sizes-container">
                    <p className={`size stock-${aProduct.stock[0].quantity}`}>{aProduct.stock[0].size}</p>
                    <p className={`size stock-${aProduct.stock[1].quantity}`}>{aProduct.stock[1].size}</p>
                    <p className={`size stock-${aProduct.stock[2].quantity}`}>{aProduct.stock[2].size}</p>
                    <p className={`size stock-${aProduct.stock[3].quantity}`}>{aProduct.stock[3].size}</p>
                    <p className={`size stock-${aProduct.stock[4].quantity}`}>{aProduct.stock[4].size}</p>
                </div>
              </div>
              <div className="product-name">{aProduct.name}</div>
              <div className="product-color">{aProduct.color}</div>
              <div className="product-price">${aProduct.price}</div>
            </div>
          ))
        }
      </div>
    );
  }
}
export default Categories;