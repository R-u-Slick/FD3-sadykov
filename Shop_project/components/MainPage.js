import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Filter from './Filter'
import {mainPageEvents} from './events';

import './MainPage.css';

class MainPage extends React.PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
       id:  PropTypes.number.isRequired,
       type:  PropTypes.string.isRequired,
       name:  PropTypes.string.isRequired,
       price:  PropTypes.number.isRequired,
       weight:  PropTypes.number.isRequired,
       img:  PropTypes.string.isRequired,
       info:  PropTypes.string.isRequired,      
     })
    )
 };

 state = {
   items: this.props.items,
   filteredItems: this.props.items,
   sortMode: 0 //0-алфавитный порядок, 1 - по цене, 2 - по весу
 }

 componentDidMount = () => {
  mainPageEvents.addListener('applyFilter',this.applyFilter);
};

componentWillUnmount = () => {
  mainPageEvents.removeListener('applyFilter',this.applyFilter);
};

applyFilter = (filter) => {
  let filtered=[...this.state.items];
  if (filter.type&&(filter.type!=='all')) {
    filtered=filtered.filter(v => v.type===filter.type);
  }
  if (filter.minPrice) {
    filtered=filtered.filter(v => v.price>=filter.minPrice);
  }
  if (filter.maxPrice) {
    filtered=filtered.filter(v => v.price<=filter.maxPrice);
  }
  if (filter.minWeight) {
    filtered=filtered.filter(v => v.weight>=(filter.minWeight/1000));
  }
  if (filter.maxWeight) {
    filtered=filtered.filter(v => v.weight<=(fsilter.maxWeight/1000));
  }
  this.setState({filteredItems: filtered});
}

sort = (EO) => {
  let sorted=[...this.state.items];
   if (EO.target.value==="name") {
    sorted = this.state.filteredItems.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log(this.state.filteredItems===sorted)
  }
  this.setState({filteredItems: sorted});
}

render() {
    var itemsCode = this.state.filteredItems.map(v =>
      <Product key={v.id} id={v.id} type={v.type} name={v.name} price={v.price} weight={v.weight}
      img={v.img}  info={v.info}
      />
    )
    console.log('MainPage Render');
    return (
      <div className="page-body">
        <div className="sort">
          <select onChange={this.sort} defaultValue="name">
            <option value="name" >Сортировать по имени</option> 
            <option value="type" >Сортировать по типу</option> 
            <option value="price" >Сортировать по цене</option>
            <option value="weight">Сортировать по весу</option>            
          </select>
        </div>
        <div className="page-body__info">
          <Filter/>
          <div className="main-page">
            {itemsCode}
          </div>
        </div>
      </div>
    )
    ;

  }

}

export default MainPage;
