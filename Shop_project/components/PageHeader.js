import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './PageHeader.css';

class PageHeader extends React.Component {

  static propTypes = {
    basketProducts: PropTypes.array.isRequired //получено из Redux
  };

  summPrice = (basketProducts) => {
    if (basketProducts.length) {
    let summ = basketProducts.reduce((r, v)=>r+v.price, 0);
    return summ.toFixed(2);
    }
  }

  render() {
    this.summPrice(this.props.basketProducts)
    return (
      <div className="page-header">
        <div className="page-header__late"><div className="page-header__late-minutes">45 минут</div> или пицца бесплатно</div>
        <div className="page-header__logo">Лисицца <br/>  пицца </div>
        <div className="page-header__info">
          <div className="page-header__info-phone">777-77-77</div>
          <div className="page-header__info-basket">
            <div className="basket">
              <NavLink to="/basket" className="basket-button">Корзина</NavLink>
            </div>
            <div className="basket-text">
              Сумма: {this.props.basketProducts.length?this.summPrice(this.props.basketProducts):0} руб.
            </div>
            <div className="basket-text">
              Товаров в корзине: {this.props.basketProducts.length}
            </div>
          </div>
        </div>
      </div>
    )
    ;

  }

}

const mapStateToProps = function (state) {
  return {
    basketProducts: state.basket.basketProducts,
  };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(PageHeader);
