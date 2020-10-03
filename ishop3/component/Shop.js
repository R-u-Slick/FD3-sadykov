import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';

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
    currentProducts: this.props.products
  };
  

  rowSelected = (code) => {
    this.setState( {selectedRowCode:code} );
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
      <div className='Shop'>
      <div className='Title'>
        {this.props.title}
      </div>
      <table className='Products-table'>
        <thead className='Table-header'>
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
    </div>
    );
  }
};

export default Shop;
