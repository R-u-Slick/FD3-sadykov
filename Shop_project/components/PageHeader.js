import React from 'react';
//import PropTypes from 'prop-types';

import './PageHeader.css';

class PageHeader extends React.Component {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="page-header">
        Лисицца пицца
      </div>
    )
    ;

  }

}

export default PageHeader;
