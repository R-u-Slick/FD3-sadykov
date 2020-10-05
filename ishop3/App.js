"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './component/Shop';

let titleText = "Перечень товаров";
let productsArr = require('./Products.json');

ReactDOM.render(
  <Shop  
    title = {titleText}
    products = {productsArr}
  />
  ,document.getElementById("container")
);


