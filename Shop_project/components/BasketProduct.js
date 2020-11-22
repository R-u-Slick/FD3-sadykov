import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {basketProduct_add} from '../redux/basketAC';

import './BasketProduct.css';

class BasketProduct extends React.PureComponent{

  static propTypes = {
    currentProduct: PropTypes.shape({
      id:  PropTypes.number.isRequired,
      name:  PropTypes.string.isRequired,
      quantity:  PropTypes.number.isRequired,
      summ:  PropTypes.number.isRequired,
    })
  };

  addToBasket = () => {
    this.props.dispatch(basketProduct_add(this.props.currentProduct) );
  }

  render() {
    console.log('BasketProduct'+this.props.currentProduct.id+'render')
    return (
      <tr className="basket-products-table">
        <td className="basket-product-name">{this.props.currentProduct.name}</td>
        <td className="basket-product-quantity">
          <input className="basket-product-button" type="button" value="-"/>
          {this.props.currentProduct.quantity}
          <input className="basket-product-button" type="button" value="+"/>
        </td>
        <td className="basket-product-summ">{this.props.currentProduct.summ}</td>
      </tr>
    )
  }
}

export default connect()(BasketProduct);

