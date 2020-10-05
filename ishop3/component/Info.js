import React from 'react';
import PropTypes from 'prop-types';

import './Info.css';

class ProductInfo extends React.Component{

  static propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="product-info">
        <div className="product-name">{this.props.name}</div>
        <div className="product-cost">{this.props.cost}</div>
        <div className="product-stock">{this.props.stock}</div>
        <div className="product-image">
          <img src={this.props.image}/>
        </div>
      </div>
    )
  }
}


export default ProductInfo;

