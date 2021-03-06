﻿var Product = React.createClass({
  displayName: "Product",

  propTypes: {
    code: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    cost: React.PropTypes.number.isRequired,
    stock: React.PropTypes.number.isRequired,
    image: React.PropTypes.string.isRequired,
    cbSelected: React.PropTypes.func.isRequired,
    selectedRowCode: React.PropTypes.number,
    cbDeleted: React.PropTypes.func.isRequired
  },


  rowClicked: function(EO) {
    EO.stopPropagation();
    this.props.cbSelected(this.props.code);
  },

  rowDeleted: function(EO) {
    EO.stopPropagation();
    if(confirm('Вы действительно хотите удалить элемент?'))
    this.props.cbDeleted(this.props.code);
  },

  render: function () {
    return React.DOM.tr(
      { className: ((this.props.code===this.props.selectedRowCode)?"product-selected":"product"), onClick:this.rowClicked},
      React.DOM.td({ className: "Product-name" }, this.props.name),
      React.DOM.td({ className: "Cost" }, this.props.cost),
      React.DOM.td({ className: "Stock" }, this.props.stock),
      React.DOM.td({ className: "Image-cell" },
        React.DOM.img({ className: "Product-image", src: this.props.image })
      ),
      React.DOM.td({className: "control-cell"},
      React.DOM.input( {type:'button',value:'удалить', className:"delete-button",  onClick: this.rowDeleted})
      )
    )
  },
});
