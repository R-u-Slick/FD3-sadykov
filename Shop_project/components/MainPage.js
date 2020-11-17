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
 }

 componentDidMount = () => {
  mainPageEvents.addListener('applyFilter',this.applyFilter);
};

componentWillUnmount = () => {
  mainPageEvents.removeListener('applyFilter',this.applyFilter);
};

applyFilter = (filter) => {
  let filtered=[...this.state.items]
  if (filter.type) {
    this.setState({filteredItems: filtered.filter(v => v.type===filter.type)});
  }
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
        <Filter/>
        <div className="main-page">
          {itemsCode}
        </div>
      </div>
    )
    ;

  }

}

export default MainPage;
