import React from 'react';
import PropTypes from 'prop-types';
import {clientEvents} from './events';
import {formEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fathersName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
  };

  clientDelete = () => {
    clientEvents.emit('clientDeleted',this.props.info.id);
  }

  clientEdit = () => {
    clientEvents.emit('clientEdited', this.props.info.id);
  }

  render() {
    console.log("MobileClient id="+this.props.info.id+" render");
    let status;
    if (this.props.info.balance>=0) {
      status='active';
    }
    else {
      status='blocked';
    } 
    return (
    <tr className='MobileClient'>
      <td className='MobileClientBalance'>{this.props.info.surname}</td>
      <td className='MobileClientFIO'>{this.props.info.name}</td>
      <td className='MobileClientBalance'>{this.props.info.fathersName}</td>
      <td className='MobileClientFIO'>{this.props.info.balance}</td>
      <td className={'MobileClientStatus'+status}>{status}</td>
      <td className='MobileClientEditButton'><input className='edit-button' type='button' value='Редактировать' onClick={this.clientEdit} disabled={this.state.formChanged}/></td>
      <td className='MobileClientDeleteButton'><input className='delete-button' type='button' value='Удалить' onClick={this.clientDelete}/></td>
    </tr>
    )    
  }
}

export default MobileClient;
