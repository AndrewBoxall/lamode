import React, { Component } from 'react';
import './PromotionalBanner.css';
import { Link } from 'react-router-dom';
import promo from '../../../images/promotional-banner.jpg';

class PromotionalBanner extends Component {
  render() {
    return (
      <div id="promotional-banner">
        <img src={promo} alt="LaMode on-going promotion"></img>
        <div className="promotional-banner-overlay">
          <div>THE NEW</div>
          <h3>CATALOG</h3>
          <div>IS HERE</div>
          <Link to="/categories/new">Shop now!</Link>
        </div>
      </div>
    );
  }
}
export default PromotionalBanner;
