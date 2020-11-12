﻿"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PagesRouter from './pages/PagesRouter';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <BrowserRouter>
  <div>
      <PageHeader/>
      {/* <PagesRouter/> */}
  </div>
  </BrowserRouter>
, document.getElementById('container') );