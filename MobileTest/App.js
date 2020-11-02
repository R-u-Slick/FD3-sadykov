"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200}, 
  {id:105, surname:"Сидоров", name:"Сидор", fathersName:"Сидорович", balance:250}, 
  {id:110, surname:"Петров", name:"Петр", fathersName:"Петрович", balance:180}, 
  {id:120, surname:"Григорьев", name:"Григорий", fathersName:"Григорьевич", balance:-220}, 
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

