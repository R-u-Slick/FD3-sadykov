import React from 'react';
import PropTypes from 'prop-types';
import {mainPageEvents} from './events';

import './Filter.css';

class Filter extends React.PureComponent {

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
    filter.maxWeight = this.inputWeightMaxRef.value;
    mainPageEvents.emit('applyFilter', filter);
  }

  cancelFilter = () => {
    this.inputTypeRef.value="all";
    this.inputPriceMinRef.value="";
    this.inputPriceMaxRef.value="";
    this.inputWeightMinRef.value="";
    this.inputWeightMaxRef.value="";
    let filter={};
    mainPageEvents.emit('applyFilter', filter);
  }


  render() {
    console.log('Filter rendered')
    return (
      <div className="filter">
        <div className="filter-title">Фильтр</div>
        <div className="filter-item">
          <div className="filter-item__name">
            <label htmlFor="select-type">Тип блюда:</label>
          </div>
          <div className="filter-type__select">
            <select id="select-type" ref={this.setInputTypeRef} defaultValue="all">
              <option value="all" >Любой</option> 
              <option value="pizza" >Пицца</option> 
              <option value="snack" >Закуски</option>
              <option value="dessert">Дессерты</option>            
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
            <label htmlFor="select-weight-min">Вес блюда (грамм):</label>
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
  }
}

export default Filter;
