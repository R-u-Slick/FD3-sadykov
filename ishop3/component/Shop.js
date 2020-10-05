import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import ProductInfo from './Info';

class Shop extends React.Component {

  static propTypes = {
    title:  PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
       PropTypes.shape({
        code:  PropTypes.number.isRequired,
        name:  PropTypes.string.isRequired,
        cost:  PropTypes.number.isRequired,
        stock:  PropTypes.number.isRequired,
        image:  PropTypes.string.isRequired
      })
    )
  };

  state = {
    selectedRowCode: null,
    selectedProduct: null,
    currentProducts: this.props.products
  };
  

  rowSelected = (code) => {
    this.setState({selectedRowCode:code}) ;
    this.setState({selectedProduct:this.props.products.filter(v => v.code===this.code)});
  };

  rowDeleted = (key) => {
    var currentRows = this.state.currentProducts.filter(item =>item.code!==key);
    this.setState({currentProducts: currentRows});
  }


  render () {
    var productsCode = this.state.currentProducts.map(v =>
      <Product key={v.code} code={v.code} name={v.name} cost={v.cost} stock={v.stock}
      image={v.image} cbSelected={this.rowSelected} selectedRowCode={this.state.selectedRowCode}
      cbDeleted={this.rowDeleted}
      />
    )
    return (
      <div className="Shop">
        <div className="title">
          {this.props.title}
        </div>
        <table className="Products-table">
          <thead className="Table-header">
            <tr>
              <th>Наименование</th>
              <th>Цена, USD</th>
              <th>Кол-во на складе, шт.</th>
              <th>Изображение</th>
              <th>Управление</th>
            </tr>
          </thead>
          <tbody>
            {productsCode}
          </tbody>
        </table>
        <div className="additional-info">
          {
          (this.state.selectedRowCode)&&
          <ProductInfo name={this.state.selectedProduct.name} cost={this.state.selectedProduct.cost} 
          stock={this.state.selectedProduct.stock} image={this.state.selectedProduct.image}/>
          }
        </div>
      </div>
    );
  }
};

export default Shop;
