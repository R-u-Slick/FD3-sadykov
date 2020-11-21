﻿import React from 'react';
import PropTypes from 'prop-types';

import './DeliveryPage.css';

class InfoPage extends React.PureComponent {

  static propTypes = {
  };

  state = {
  }

  render() {
    console.log('Delivery rendered')
    return (
      <div className="infoPage">
        <div className="infoPage-title">
          Зона доставки
        </div>
        <div className="infoPage-subtitle">
          Самовывоз:
        </div>
        <div className="infoPage-text">
          пр. Газеты Правда, 20, круглосуточно<br/>
          ул. Городецкая, 38а, круглосуточно<br/>
          пр. Рокоссовского, 150в, круглосуточно<br/>
          ул. Революционная, 17, круглосуточно<br/>
          ул. Лобанка, 77, круглосуточно<br/>
          ул. Орловская, 40а, круглосуточно<br/>
          ул. Жиновича, 7 <br/>
          понедельник 00:00–23:00 / вторник, среда 11:00–23:00 / четверг 11:00–24:00 / пятница–воскресенье 00:00–24:00<br/>
          ул. Кольцова, 10в, 11:30–23:00<br/>
          Правило «15 минут или пицца бесплатно» действует только при заказе через окно самовывоза. Компания оставляет за собой право изменять условия обслуживания через окно самовывоза, предупреждая об этом Клиента в момент оформления заказа.
          При заказе на самовывоз онлайн или через колл-центр действует правило «вовремя или пицца бесплатно». Если заказ не будет готов ко времени, указанному при оформлении заказа, то одну пиццу или другое блюдо с наименьшей ценой из своего заказа Клиент получает бесплатно..
        </div>

        <div className="infoPage-subtitle">
          Заказ онлайн: когда начинается отсчет времени?
        </div>
        <div className="infoPage-text">
          Если Вы совершаете заказ с Вашего номера телефона через нашу компанию впервые, после отправки заказа с Вами свяжется оператор для подтверждения заказа. Начиная со второго заказа проверка по телефону осуществляться не будет.
          Обработка заказа, оформленного через сайт, осуществляется в течение пяти минут. Временем принятия заказа через сайт будет считаться время окончания обработки заказа оператором. 
          По окончании обработки заказа оператором Вам будет выслано SMS-уведомление с информацией о заказе, включая время его принятия. Для предварительных заказов будет указано время получения заказа.
        </div>

        <div className="infoPage-subtitle">
          Как можно рассчитаться за заказ?
        </div>
        <div className="infoPage-text">
          Мы принимаем белорусские рубли и пластиковые карты.
          Возможна оплата банковской картой через интернет, а также безналичный расчет.
        </div>

        <div className="infoPage-subtitle">
          Как подписаться на нас в социальных сетях?
        </div>
        <div className="infoPage-text">
          Мы не ведем деятельности в социальных сетях. Вся официальная информация только на нашем сайте. 
        </div>

        <div className="infoPage-subtitle">
          Как происходит возврат денежных средств за бесплатное блюдо при оплате онлайн?
        </div>
        <div className="infoPage-text">
          При оплате онлайн на сайте pzz.by в момент оформления заказа на карт-счете Клиента блокируется полная сумма к оплате. Окончательное списание со счета производится после получения Клиентом заказа в течение двух рабочих дней (в зависимости от банка Клиента). При превышении заявленного времени доставки сумма списания со счета будет меньше на сумму бесплатного блюда, что будет отображено в личном кабинете платежной карты.
          SMS-уведомление Клиенту о возврате суммы за бесплатное блюдо не поступит, т.к. это не операция возврата денежных средств, а операция разблокировки части суммы.
        </div>

        <div className="infoPage-subtitle">
          Как работает правило "15 минут или пицца бесплатно" при заказе через окно самовывоза?
        </div>
        <div className="infoPage-text">
          Если заказ, оформленный через окно самовывоза, не будет готов через 15 минут с момента оплаты, то одну пиццу или другое блюдо с наименьшей ценой из Вашего заказа Вы получите бесплатно. Компания оставляет за собой право изменять условия обслуживания через окно самовывоза, предупреждая об этом Клиента в момент оформления заказа.     
        </div>


      </div>
    )
  }
}

export default InfoPage;
