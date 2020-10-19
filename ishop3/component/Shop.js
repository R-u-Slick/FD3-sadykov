import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import ProductInfo from './Info';
import ProductForm from './Form';

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
    currentProducts: this.props.products,
    mode: 0, //0 - режим просмотра; 1 - режим редактирования; 2 - режим добавления товара
    editedRow: null,
    formChanged: false,
  };
  

  rowSelected = (code) => {
    if ((this.state.mode===1)&&!this.state.formChanged) {
      this.setState({mode:0});
    }
    this.setState({selectedRowCode:code});
    this.setState({selectedProduct:this.state.currentProducts.filter(v => v.code===code)[0]});
    
  };

  rowDeleted = (key) => {
    var currentRows = this.state.currentProducts.filter(item =>item.code!==key);
    this.setState({currentProducts: currentRows});
  }

  productEdited = (code) => {
    this.setState({mode: 1});
    this.setState({editedRow:this.state.currentProducts.filter(v => v.code===code)[0]});
  }

  editModeCancelled = () => {
    this.setState({mode: 0});
    this.setState({formChanged: false});
  }

  newProductSave = (newProduct) => {
    if (this.state.mode===1) {
      let editedProductIndex = this.state.currentProducts.indexOf(this.state.editedRow);
      let editedProducts = this.state.currentProducts;
      editedProducts[editedProductIndex] = newProduct;
      this.setState({formChanged: false})
    }
    if (this.state.mode===2) {
      this.state.currentProducts.push(newProduct);
    }
  
  }

  formChanged = (changedState) => {
    this.setState({formChanged: changedState})
  }

  addNewProduct = () => {
    this.setState({mode: 2});
    let code=1;
    while (this.state.currentProducts.some(v => v.code==code)) {
      code++
    }
    let newRow ={}
    newRow.code=code;
    newRow.name="";
    newRow.cost="";
    newRow.stock="";
    newRow.image="";
    this.setState({editedRow: newRow});
  }

  dataChanged = () => {
    this.state.newEditData=false;
  }

  render () {
    var productsCode = this.state.currentProducts.map(v =>
      <Product key={v.code} code={v.code} name={v.name} cost={v.cost} stock={v.stock}
      image={v.image} cbSelected={this.rowSelected} selectedRowCode={this.state.selectedRowCode}
      cbDeleted={this.rowDeleted} cbEdit={this.productEdited} formChanged={this.state.formChanged}
      mode={this.state.mode} 
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
        {
        (!this.state.mode)&&
        <input type="button" value="Новый продукт" className="new-product-button" onClick={this.addNewProduct}/>
        }
        <div className="additional-info">
          {
          (this.state.selectedRowCode&&!this.state.mode)&&
          <ProductInfo name={this.state.selectedProduct.name} cost={this.state.selectedProduct.cost} 
          stock={this.state.selectedProduct.stock} image={this.state.selectedProduct.image}/>
          }
          {
          (Boolean(this.state.mode))&&
          <ProductForm code={this.state.editedRow.code} name={this.state.editedRow.name} cost={this.state.editedRow.cost} 
          stock={this.state.editedRow.stock} image={this.state.editedRow.image} mode = {this.state.mode} cbEditModeCancelled={this.editModeCancelled}
          cbNewProduct={this.newProductSave} cbFormChanged={this.formChanged} cbDataChanged = {this.dataChanged}/>
          }
        </div>
      </div>
    );
  }
};

export default Shop;
