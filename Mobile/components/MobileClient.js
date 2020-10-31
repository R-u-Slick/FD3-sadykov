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
    mode: PropTypes.number.isRequired,
  };

  state = {
    info: this.props.info,
    formChanged: false,
  };

  componentDidMount = () => {
    formEvents.addListener('formChanged', this.formChanged);
    formEvents.addListener('formChangedCancel',this.formChangedCancel);
    formEvents.addListener('formCancelled', this.formChangedCancel);
  };

  componentWillUnmount = () => {
    formEvents.removeListener('formChanged', this.formChanged);
    formEvents.removeListener('formChangedCancel',this.formChangedCancel);
    formEvents.removeListener('formCancelled', this.formChangedCancel);
  };

  formChanged = (changed) => {
    this.setState({formChanged: changed});
  }

  formChangedCancel = () => {
    this.setState({formChanged: false});
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
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
    if (this.state.info.balance>=0) {
      status='active';
    }
    else {
      status='blocked';
    } 

    return (
    <tr className='MobileClient'>
      <td className='MobileClientBalance'>{this.state.info.surname}</td>
      <td className='MobileClientFIO'>{this.state.info.name}</td>
      <td className='MobileClientBalance'>{this.state.info.fathersName}</td>
      <td className='MobileClientFIO'>{this.state.info.balance}</td>
      <td className={'MobileClientStatus'+status}>{status}</td>
      <td className='MobileClientEditButton'><input className='edit-button' type='button' value='Редактировать' onClick={this.clientEdit} disabled={this.state.formChanged}/></td>
      <td className='MobileClientDeleteButton'><input className='edit-button' type='button' value='Удалить' onClick={this.clientDelete} disabled={this.props.mode}/></td>
    </tr>
    )    
  }
}

export default MobileClient;
