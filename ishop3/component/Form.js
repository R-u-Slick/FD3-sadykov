import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class ProductForm extends React.Component{

  static propTypes = {
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mode: PropTypes.number.isRequired,
    cbEditModeCancelled: PropTypes.func.isRequired,
    cbNewProduct: PropTypes.func.isRequired,
    cbFormChanged: PropTypes.func.isRequired,
    cbDataChanged: PropTypes.func.isRequired
  };

  state = {
    isChanged: false,
    isValid: false,
    codeValue: this.props.code,
    nameValue: this.props.name,
    nameError: "",
    costValue: this.props.cost,
    costError: "",
    stockValue: this.props.stock,
    stockError: "",
    imageValue: this.props.image,
    imageError: ""
  }

  nameChanged = (EO) => {
    this.setState({nameValue: EO.target.value});
    if (!EO.target.value) {
      this.setState({nameError: "Пожалуйста, заполните поле"})
    }
    else if(!isNaN(EO.target.value)) {
      this.setState({nameError: "Значение должно быть строкой"})
    }
    else {
      this.setState({nameError: ""})
    }
  };

  costChanged = (EO) => {
    this.setState({costValue: Number(EO.target.value)});   
    if (!EO.target.value) {
      this.setState({costError: "Пожалуйста, заполните поле"})
    }
    else if(isNaN(EO.target.value)) {
      this.setState({costError: "Значение должно быть числом"})
    }
    else {
      this.setState({costError: ""})
    }
  };

  stockChanged = (EO) => {
    this.setState({stockValue: Number(EO.target.value)});
    if (!EO.target.value) {
      this.setState({stockError: "Пожалуйста, заполните поле"})
    }
    else if(isNaN(EO.target.value)) {
      this.setState({stockError: "Значение должно быть числом"})
    }
    else {
      this.setState({stockError: ""})
    }
  };

  imageChanged = (EO) => {
    this.setState({imageValue: EO.target.value});
    if (!EO.target.value) {
      this.setState({imageError: "Пожалуйста, заполните поле"})
    }
    else if(!isNaN(EO.target.value)) {
      this.setState({imageError: "Значение должно быть строкой"})
    }
    else {
      this.setState({imageError: ""})
    }  
  };

  saveProduct = () => {
    let newProduct = {};
    newProduct.code = this.state.codeValue;
    newProduct.name = this.state.nameValue;
    newProduct.cost = this.state.costValue;
    newProduct.stock = this.state.stockValue;
    newProduct.image = this.state.imageValue;
    this.props.cbEditModeCancelled();
    this.props.cbNewProduct(newProduct);
  }

  changeCheck = () => {
    let changed;
    if ((this.props.name!==this.state.nameValue)||(this.props.cost!==this.state.costValue)||
    (this.props.stock!==this.state.stockValue)||(this.props.image!==this.state.imageValue)){
      changed = true;
    }
    else {
      changed=false;
    }
    this.setState({isChanged: changed});
    this.props.cbFormChanged(changed);
  }

  render() {
    return (
      <div className="product-form">
        <h2 className="form-header">
          {(this.props.mode===1)&&"Редактирование товара"}
          {(this.props.mode===2)&&"Создание нового товара"}
        </h2>
        
        <div className="product-id">ID: {this.state.codeValue}</div>
        <div className="product-name">
          <span>Имя</span>
          <input type="text" name="input-name" className="input-text" value={this.state.nameValue} onChange={this.nameChanged} onBlur={this.changeCheck}/>
          <span className="error">{this.state.nameError}</span>
        </div>
        <div className="product-cost">
          <span>Цена</span>
          <input type="text" name="input-cost" className="input-text" value={this.state.costValue} onChange={this.costChanged} onBlur={this.changeCheck}/>
          <span className="error">{this.state.costError}</span>
        </div>
        <div className="product-stock">
          <span>Кол-во</span>
          <input type="text" name="input-stock" className="input-text" value={this.state.stockValue} onChange={this.stockChanged} onBlur={this.changeCheck}/>
          <span className="error">{this.state.stockError}</span>
        </div>
        <div className="product-image">
          <span>Url картинки</span>
          <input type="text" name="input-image" className="input-text" value={this.state.imageValue} onChange={this.imageChanged} onBlur={this.changeCheck}/>
          <span className="error">{this.state.imageError}</span>
        </div>
        <div className="form-controls">
          <input type="button" value="Сохранить" className="save-button" onClick={this.saveProduct} 
          disabled={this.state.nameError||this.state.costError||this.state.stockError||this.state.imageError}/>
          <input type="button" value="Отмена" className="cancel-button" onClick={this.props.cbEditModeCancelled}/>
        </div>
      </div>
    )
  }
}

export default ProductForm;

