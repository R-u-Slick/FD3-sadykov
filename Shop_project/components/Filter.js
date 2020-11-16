import React from 'react';
import PropTypes from 'prop-types';
import {mainPageEvents} from './events';

import './Filter.css';

class Filter extends React.Component {

  static propTypes = {
  };

  state = {
  }

  inputTypeRef = null;
  inputPriceRef = null;
  inputWeightRef = null;
 
  setInputTypeRef = (ref) => {
    this.inputTypeRef=ref;
  };

  setInputPriceRef = (ref) => {
    this.inputPriceRef=ref;
  };

  setInputWeightRef = (ref) => {
    this.inputWeightRef=ref;
  };



  applyFilter = () => {
    type = this.inputTypeRef.value;
  }

  render() {
    return (
      <div className="filter">
        <div className="filter-title">Фильтр</div>
        <div className="filter-item">
          <div className="filter-item__name">
            <label htmlFor="select-type">Тип блюда:</label>
          </div>
          <div className="filter-type__select">
            <select id="select-type" ref={this.setInputTypeRef} defaultValue="Pizza">
              <option value="Pizza" >Пицца</option> 
              <option value="Snack" >Закуски</option>
              <option value="Dessert">Дессерты</option>            
            </select>
          </div>
        </div>
        <div className="filter-item">
          <div className="filter-item__name">
            <label htmlFor="select-price">Цена блюда до:</label>
          </div>
          <div className="filter-price__input">
            <input type="text" id="select-price" ref={this.setInputPriceRef} />
          </div>
        </div>
        <div className="filter-item">
          <div className="filter-item__name">
            <label htmlFor="select-weight">Вес блюда до:</label>
          </div>
          <div className="filter-weight__input">
            <input type="text" id="select-weight" ref={this.setInputWeightRef}/>
          </div>
        </div>
        <div className="filter-button">
          <input type="button" value="Применить" className="filter-button__apply" onClick={this.applyFilter}/>
        </div>
      </div>
    )
    ;

  }

}

export default Filter;
