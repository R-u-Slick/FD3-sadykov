import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import './MobileCompany.css';
import ClientForm from './Form';
import {clientEvents} from './events';
import {formEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        fathersName: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    filter: 2, //0 - показать заблокированных; 1 - показать активных; 2 - показать всех
    mode: 0, //0 - режим просмотра; 1 - режим редактирования; 2 - режим добавления товара
    selectedItemCode: null,
  };

  componentDidMount = () => {
    clientEvents.addListener('clientDeleted',this.clientDeleted);
    clientEvents.addListener('clientEdited', this.clientEdited);
    formEvents.addListener('formCancelled', this.formCancelled);
    formEvents.addListener('formSaved', this.formSaved);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('clientDeleted',this.clientDeleted);
    clientEvents.removeListener('clientEdited', this.clientEdited);
    formEvents.removeListener('formCancelled', this.formCancelled);
    formEvents.removeListener('formSaved', this.formSaved);
  };

  clientFilter = (filteringMode) => {
    //показать заблокированных
    if (filteringMode===0) {
      return this.state.clients.filter(v => v.balance<0)
    }
    //показать активных
    if (filteringMode===1) {
      return this.state.clients.filter(v => v.balance>=0)
    }
    //Показать всех
    if (filteringMode===2) {
      return this.state.clients
    }
  }

  clientDeleted = (id) => {
    var currentRows = this.state.clients.filter(item =>item.id!==id);
    this.setState({clients: currentRows});
  }

  clientEdited = (id) => {
    this.setState({mode: 1})
    this.setState({selectedItemCode: id});
  }

  formCancelled = () => {
    this.setState({mode:0})
  }

  formSaved = (newClient) => {
    if (this.state.mode===1) {
      let editedClientIndex;
      this.state.clients.forEach((v, i) => {
        if (v.id===newClient.id) {
          editedClientIndex=i;
        }
      });
      let editedClients = this.state.clients;
      editedClients[editedClientIndex] = newClient;
    }
    if (this.state.mode===2) {
      this.state.clients.push(newClient);
    }
  }

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  showAll = () => {
    this.setState({filter: 2});
  }

  showActive = () => {
    this.setState({filter: 1});
  }

  showBlocked = () => {
    this.setState({filter: 0});
  }

  addClient = () => {
    this.setState({mode: 2});
    let code=1;
    while (this.state.clients.some(v => v.code==code)) {
      code++
    }
    this.setState({selectedItemCode: code});
  }
  
  render() {

    console.log("MobileCompany render");
    let filteredClients = this.clientFilter(this.state.filter);
    let clientsCode=filteredClients.map( client =>
      <MobileClient key={client.id} info={client} filter={this.state.filter} mode={this.state.mode}/>
    );
    let selectedItem
    if (this.state.mode===1){
      selectedItem=this.props.clients.find(client => client.id===this.state.selectedItemCode);
      
    }
    if (this.state.mode===2) {
      selectedItem={};
      selectedItem.id=this.state.selectedItemCode;
      selectedItem.surname='';
      selectedItem.name='';
      selectedItem.fathersName='';
      selectedItem.balance='';
    }

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanySwitch'>
          <input type="button" value="МТС" onClick={this.setName1} />
          <input type="button" value="Velcom" onClick={this.setName2} />
          <div className='MobileCompanyName'>Компания: &laquo;{this.state.name}&raquo;</div>
        </div>
        <div className='MobileCompanyFilter'>
          <input type="button" value="Все" onClick={this.showAll} />
          <input type="button" value="Активные" onClick={this.showActive} />
          <input type="button" value="Заблокированные" onClick={this.showBlocked} />
        </div>
        <div className='MobileCompanyClients'>      
        <table className='MobileCompanyClientsTable'>
          <thead className="Table-header">
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {clientsCode}
          </tbody>
        </table>
      </div>
      <div className='mobileCompanyAddClient'>
        {
          Boolean(!this.state.mode)&&
          <input className='clientAddButton' type="button" value="Добавить клиента" onClick={this.addClient} />
        }
      </div>
        {
          (Boolean(this.state.mode))&&
          <ClientForm key={selectedItem.id} info={selectedItem} mode = {this.state.mode} />
        }
      </div>
    );
  }
}

export default MobileCompany;
