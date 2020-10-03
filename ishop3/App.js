"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './component/Shop';

var titleText = "Перечень товаров";
var productsArr = [
  {
    name: "Сковородка",
    code: 1,
    cost: 1000,
    stock: 222,
    image: "img/skovorodka.jpg",
  },
  {
    name: "Кастрюлька",
    code: 2,
    cost: 2000,
    stock: 123,
    image: "img/kastrulka.jpg",
  },
  {
    name: "Айфон",
    code: 3,
    cost: 3000,
    stock: 444,
    image: "img/iphone.jpg",
  },
];



ReactDOM.render(
  <Shop  
    title = {titleText}
    products = {productsArr}
  />
  ,document.getElementById("container")
);


