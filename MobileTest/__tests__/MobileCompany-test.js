"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа кнопки "Активные"', () => {

  // создаём тестовую версию компонента
  let companyName='Velcom';
  let clientsArr=[
    {id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200}, 
    {id:105, surname:"Сидоров", name:"Сидор", fathersName:"Сидорович", balance:250}, 
    {id:110, surname:"Петров", name:"Петр", fathersName:"Петрович", balance:180}, 
    {id:120, surname:"Григорьев", name:"Григорий", fathersName:"Григорьевич", balance:-220}, 
  ];
  const component = renderer.create(
      <MobileCompany name={companyName} clients={clientsArr}/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку показать активных клиентов
  const buttonElem = component.root.find( el => el.props.className=='show-active'); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
  // получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

   // "нажмём" кнопку ещё раз
   buttonElem.props.onClick();
     // и получаем окончательный снэпшот
   componentTree=component.toJSON();
   expect(componentTree).toMatchSnapshot();
  }
);

test('работа кнопки "Заблокированные"', () => {
  // создаём тестовую версию компонента
  let companyName='Velcom';
  let clientsArr=[
    {id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200}, 
    {id:105, surname:"Сидоров", name:"Сидор", fathersName:"Сидорович", balance:250}, 
    {id:110, surname:"Петров", name:"Петр", fathersName:"Петрович", balance:180}, 
    {id:120, surname:"Григорьев", name:"Григорий", fathersName:"Григорьевич", balance:-220}, 
  ];
  const component = renderer.create(
      <MobileCompany name={companyName} clients={clientsArr}/>
  );
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // найдём в вёрстке компонента кнопку показать заблокированных клиентов
  const buttonElem = component.root.find( el => el.props.className=='show-blocked'); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
  // получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   // "нажмём" кнопку ещё раз
   buttonElem.props.onClick();
     // и получаем окончательный снэпшот
   componentTree=component.toJSON();
   expect(componentTree).toMatchSnapshot();
  }
);

test('работа кнопки "Все"', () => {
  // создаём тестовую версию компонента
  let companyName='Velcom';
  let clientsArr=[
    {id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200}, 
    {id:105, surname:"Сидоров", name:"Сидор", fathersName:"Сидорович", balance:250}, 
    {id:110, surname:"Петров", name:"Петр", fathersName:"Петрович", balance:180}, 
    {id:120, surname:"Григорьев", name:"Григорий", fathersName:"Григорьевич", balance:-220}, 
  ];
  const component = renderer.create(
      <MobileCompany name={companyName} clients={clientsArr}/>
  );
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // найдём в вёрстке компонента кнопку показать всех клиентов
  const buttonElem = component.root.find( el => el.props.className=='show-all'); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
  // получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   // "нажмём" кнопку ещё раз
   buttonElem.props.onClick();
     // и получаем окончательный снэпшот
   componentTree=component.toJSON();
   expect(componentTree).toMatchSnapshot();
  }
);

test('работа кнопки "Добавить клиента"', () => {
  // создаём тестовую версию компонента
  let companyName='Velcom';
  let clientsArr=[
    {id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200}, 
    {id:105, surname:"Сидоров", name:"Сидор", fathersName:"Сидорович", balance:250}, 
    {id:110, surname:"Петров", name:"Петр", fathersName:"Петрович", balance:180}, 
    {id:120, surname:"Григорьев", name:"Григорий", fathersName:"Григорьевич", balance:-220}, 
  ];
  const component = renderer.create(
      <MobileCompany name={companyName} clients={clientsArr}/>
  );
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // найдём в вёрстке компонента кнопку показать добавить клиента
  const buttonElem = component.root.find( el => el.props.className=='addClient'); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
  // получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  }
);
