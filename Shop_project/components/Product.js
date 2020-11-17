import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.PureComponent{

  static propTypes = {
    id:  PropTypes.number.isRequired,
    type:  PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    price:  PropTypes.number.isRequired,
    weight:  PropTypes.number.isRequired,
    img:  PropTypes.string.isRequired,
    info:  PropTypes.string.isRequired,      
};

  render() {
    console.log('Product'+this.props.id+'render')
    return (
         <div className="product-card">
          <div className="product-image">
            <img src={this.props.img}/>
          </div>
          <div className="product-name">{this.props.name}</div>
          <div className="product-buy">
            <div className="product-price">{this.props.price}</div>
            <input type="button" value="В корзину" className="button-basket"/>
          </div>
          <div className="product-weight">
            {this.props.weight*1000} г
          </div>
          <div className="product-info">
           {this.props.info}
          </div>
        </div>
    )
  }
}


export default Product;

