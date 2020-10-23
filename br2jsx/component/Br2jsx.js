import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
    text:  PropTypes.string.isRequired,
  };

  render () {
    let array = this.props.text.split(/<br.*?>/);
    let brArray = [];
    array.forEach((v,i) => {
      brArray.push(array[i]);
        if (i<array.length-1) {
          brArray.push(<br key={i}></br>);
        }
      }  
    )
    return (
      <div className="br2jsx">
        {brArray}
      </div>
    )
  }
};

export default Br2jsx;
