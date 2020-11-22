import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './BasketPage.css';
import BasketProduct from './BasketProduct';

class BasketPage extends React.PureComponent {

  static propTypes = {
    basketProducts: PropTypes.array.isRequired //получено из Redux
  };

  state = {
    basketProducts: this.props.basketProducts,
  }

  basketProductsSumm = [];

  calculateQuantity = () => {
    this.state.basketProducts.forEach((v)=>{
      if (!this.basketProductsSumm.some((item)=>item.id===v.id)) {
        let basketProductData = {};
        basketProductData.id=v.id; 
        basketProductData.name=v.name; 
        basketProductData.quantity=this.state.basketProducts.filter(item=>item === v).length; 
        basketProductData.summ=Number((basketProductData.quantity*v.price).toFixed(2));
        this.basketProductsSumm.push(basketProductData)
      }
    })
  }

  render() {
    this.calculateQuantity();
    var itemsCode = this.basketProductsSumm.map(v =>
      <BasketProduct key={v.id} currentProduct={v} />
    )
    console.log('Basket rendered');
    return (
      <div className="basketPage">
        <div className="basketPage-title">
          Оформление заказа
        </div>
        <div className="basketPage-subtitle">
          Ваш заказ
        </div>
        {
          (!Boolean(this.props.basketProducts.length))&&
          <div className="no-products">Ваша корзина пуста</div>
        }
        <table className="basket-products">
          <tbody className="basket-table">
           {itemsCode}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    basketProducts: state.basket.basketProducts,
  };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(BasketPage);

