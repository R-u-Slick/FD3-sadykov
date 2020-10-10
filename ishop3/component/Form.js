import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class ProductForm extends React.Component{

  static propTypes = {
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="product-form">
        <div className="product-id">ID: {this.props.code}</div>
        <div className="product-name">
          <span>Имя</span>
          <input type="text" name="input-name" className="input-text" defaultValue={this.props.name}/>
        </div>
        <div className="product-cost">
          <span>Цена</span>
          <input type="text" name="input-cost" className="input-text" defaultValue={this.props.cost}/>
        </div>
        <div className="product-stock">
          <span>Кол-во</span>
          <input type="text" name="input-stock" className="input-text" defaultValue={this.props.stock}/>
        </div>
        <div className="product-image">
          <span>Url картинки</span>
          <input type="text" name="input-image" className="input-text" defaultValue={this.props.image}/>
        </div>

      </div>
    )
  }
}


export default ProductForm;

