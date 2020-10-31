import React from 'react';
import PropTypes from 'prop-types';
import {formEvents} from './events';

import './Form.css';

class ClientForm extends React.PureComponent{

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number,
      surname: PropTypes.string,
      name: PropTypes.string,
      fathersName: PropTypes.string,
      balance: PropTypes.number,
    }),
    mode: PropTypes.number.isRequired
  };

  inputSurnameRef = null;
  inputNameRef = null;
  inputFathersNameRef = null;
  inputBalanceRef = null;

  setInputSurnameRef = (ref) => {
    this.inputSurnameRef=ref;
  };

  setInputNameRef = (ref) => {
    this.inputNameRef=ref;
  };

  setInputFathersNameRef = (ref) => {
    this.inputFathersNameRef=ref;
  };

  setInputBalanceRef = (ref) => {
    this.inputBalanceRef=ref;
  };


  saveClient = () => {
    let newClient = {};
    if (this.props.mode===1) {
      newClient.id = this.props.id;
    }
    newClient.surname = this.inputSurnameRef.value;
    newClient.name = this.inputNameRef.value;
    newClient.fathersName = this.inputFathersNameRef.value;
    newClient.balance = Number(this.inputBalanceRef.value);
    this.formCancel()
    formEvents.emit('formSaved', newClient);
    formEvents.emit('formChangedCancel');
  }

  formCancel = () => {
    formEvents.emit('formCancelled');
  }

  changeCheck = () => {
    if (this.props.mode===1) {
      let changed;
      if ((this.props.info.surname!==this.inputSurnameRef.value)||(this.props.info.name!==this.inputNameRef.value)||
      (this.props.info.fathersName!==this.inputFathersNameRef.value)||(Number(this.props.info.balance)!==Number(this.inputBalanceRef.value))){
        changed = true;
      }
      else {
        changed=false;
      }
      formEvents.emit('formChanged', changed);
    }
    if (this.props.mode===2) {
      let changed;
      if ((this.inputSurnameRef.value!=='')||(this.inputNameRef.value!=='')||
      (this.inputFathersNameRef.value!=='')||(Number(this.inputBalanceRef.value!==''))){
        changed = true;
      }
      else {
        changed=false;
      }
      formEvents.emit('formChanged', changed);
    }

  }

  render() {
    console.log('Form render');
    return (
      <div className="client-form">
        <h3 className="form-header">
          {(this.props.mode===1)&&"Редактирование клиента"}
          {(this.props.mode===2)&&"Добавление нового клиента"}
        </h3>  {
        (this.props.mode===1)&&
        <div className="product-id">ID: {this.props.info.id}</div>
        }
        <div className="product-surname">
          <span>Фамимлия</span>
          <input type="text" name="input-surname" className="input-text" defaultValue={(this.props.mode===1)?this.props.info.surname:''}
          onBlur={this.changeCheck} ref={this.setInputSurnameRef}/>
        </div>
        <div className="product-name">
          <span>Имя</span>
          <input type="text" name="input-name" className="input-text" defaultValue={(this.props.mode===1)?this.props.info.name:''}
          onBlur={this.changeCheck} ref={this.setInputNameRef}/>
        </div>
        <div className="product-fathersName">
          <span>Отчество</span>
          <input type="text" name="input-fathersName" className="input-text" defaultValue={(this.props.mode===1)?this.props.info.fathersName:''} 
          onBlur={this.changeCheck} ref={this.setInputFathersNameRef}/>
        </div>
        <div className="product-balance">
          <span>Баланс</span>
          <input type="text" name="input-balance" className="input-text" defaultValue={(this.props.mode===1)?this.props.info.balance:''} 
          onBlur={this.changeCheck} ref={this.setInputBalanceRef}/>
        </div>

        <div className="form-controls">
          <input type="button" value="Сохранить" className="save-button" onClick={this.saveClient} 
          disabled={this.state.nameError||this.state.costError||this.state.stockError||this.state.imageError}/>
          <input type="button" value="Отмена" className="cancel-button" onClick={this.formCancel}/>
        </div>
      </div>
    )
  }
}

export default ClientForm;

