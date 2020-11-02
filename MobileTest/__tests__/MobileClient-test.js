"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';

test('работа кнопки "Редактировать"', () => {
  // создаём тестовую версию компонента
  let client={id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200};
  const component = renderer.create(
  <MobileClient key={client.id} info={client}/>
  );
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // найдём в вёрстке компонента кнопку редактирования клиента
  const buttonElem = component.root.find( el => el.props.className=='edit-button'); 
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

test('работа кнопки "Удалить"', () => {
  // создаём тестовую версию компонента
  let client={id:101, surname:"Иванов", name:"Иван", fathersName:"Иванович", balance:200};
  const component = renderer.create(
  <MobileClient key={client.id} info={client}/>
  );
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // найдём в вёрстке компонента кнопку удаления клиента
  const buttonElem = component.root.find( el => el.props.className=='delete-button'); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
  // получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  }
);

