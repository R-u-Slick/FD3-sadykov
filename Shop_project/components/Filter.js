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
  inputPriceMinRef = null;
  inputPriceMaxRef = null;
  inputWeightMinRef = null;
  inputWeightMaxRef = null;
 
  setInputTypeRef = (ref) => {
    this.inputTypeRef=ref;
  };

  setInputPriceMinRef = (ref) => {
    this.inputPriceMinRef=ref;
  };

  setInputPriceMaxRef = (ref) => {
    this.inputPriceMaxRef=ref;
  };

  setInputWeightMinRef = (ref) => {
    this.inputWeightMinRef=ref;
  };

  setInputWeightMaxRef = (ref) => {
    this.inputWeightMaxRef=ref;
  };

  applyFilter = () => {
    let filter={};
    filter.type=this.inputTypeRef.value;
    filter.minPrice = this.inputPriceMinRef.value;
    filter.maxPrice = this.inputPriceMaxRef.value;
    filter.minWeight = this.inputWeightMinRef.value;
    filter.maxWeigt = this.inputWeightMaxRef.value;
    mainPageEvents.emit('applyFilter', filter);
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
            <label htmlFor="select-price-min">Цена блюда:</label>
          </div>
          <div className="filter-input">
            <input type="text" id="select-price-min" ref={this.setInputPriceMinRef} placeholder="от"/>
            <input type="text" id="select-price-max" ref={this.setInputPriceMaxRef} placeholder="до"/>
          </div>
        </div>
        <div className="filter-item">
          <div className="filter-item__name">
            <label htmlFor="select-weight-min">Вес блюда:</label>
          </div>
          <div className="filter-input">
            <input type="text" id="select-weight-min" ref={this.setInputWeightMinRef} placeholder='от'/>
            <input type="text" id="select-weight-max" ref={this.setInputWeightMaxRef} placeholder='до'/>
          </div>
        </div>
        <div className="filter-controls">
          <input className="filter-controls__button" type="button" value="Применить" onClick={this.applyFilter}/>
          <input className="filter-controls__button" type="button" value="Сброс" onClick={this.cancelFilter}/>
        </div>
      </div>
    )
    ;

  }

}

export default Filter;
