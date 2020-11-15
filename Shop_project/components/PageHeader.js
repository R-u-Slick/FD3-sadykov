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
        <div className="page-header__late"><div className="page-header__late-minutes">45 минут</div> или пицца бесплатно</div>
        <div className="page-header__logo">Лисицца <br/>  пицца </div>
        <div className="page-header__phone">755-66-55</div>
      </div>
    )
    ;

  }

}

export default PageHeader;
