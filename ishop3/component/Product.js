import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component{

  static propTypes = {
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    cbSelected: PropTypes.func.isRequired,
    selectedRowCode: PropTypes.number,
    cbDeleted: PropTypes.func.isRequired,
    cbEdit: PropTypes.func.isRequired
  };


  rowClicked = (EO) => {
    EO.stopPropagation();
    this.props.cbSelected(this.props.code);
  };

  rowDeleted = (EO) => {
    EO.stopPropagation();
    if(confirm('Вы действительно хотите удалить элемент?'))
    this.props.cbDeleted(this.props.code);
  };

  editProduct = (EO) => {
    EO.stopPropagation();
    this.props.cbEdit(this.props.code);
  }

  render() {
    return (
         <tr className={(this.props.code===this.props.selectedRowCode)?"product-selected":"product"} onClick={this.rowClicked}>
          <td className="Product-name">{this.props.name}</td>
          <td className="Cost">{this.props.cost}</td>
          <td className="Stock">{this.props.stock}</td>
          <td className="Image-cell">
            <img className="Product-image" src={this.props.image}/>
          </td>
          <td className="control-cell">
            <input type="button" value="Редактировать" className="edit-button" onClick={this.editProduct}/>
            <input type="button" value="Удалить" className="delete-button" onClick={this.rowDeleted}/>
          </td>
        </tr>
    )
  }
}


export default Product;

