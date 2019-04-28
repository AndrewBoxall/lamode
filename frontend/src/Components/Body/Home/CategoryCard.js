import React, { Component } from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

class CategoryCard extends Component {
  render() {
    return (
      <div className="category-card">
        <Link to={this.props.link}>
          {this.props.children}
          <div className="img-text-overlay">
            {this.props.text}
          </div>
        </Link>
    	</div>
    );
  }
}
export default CategoryCard;
