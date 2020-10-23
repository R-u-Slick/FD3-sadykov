import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors:  PropTypes.array.isRequired,
  };

  render () {
    let code = this.props.children;

    for (var i=0; i<this.props.colors.length; i++) {
      code=<div style={{border:"solid 1px "+this.props.colors[i], padding: "10px"}}>{code}</div>;
    }
    return (
      <div  className="rainbow-frame">
        {code}
      </div>
    )
  }
};

export default RainbowFrame;
