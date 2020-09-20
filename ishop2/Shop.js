var Shop = React.createClass({
  displayName: "Shop",

  propTypes: {
    title: React.PropTypes.string.isRequired,
    products:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        cost: React.PropTypes.number.isRequired,
        stock: React.PropTypes.number.isRequired,
        image: React.PropTypes.string.isRequired
      })
    )
  },

  getInitialState: function() {
    return { 
      selectedRowCode: null,
      currentProducts: this.props.products
    };
  },

  rowSelected: function(code) {
    this.setState( {selectedRowCode:code} );
  },

  rowDeleted: function(key) {
    var currentRows = this.state.currentProducts.filter(item =>item.code!==key);
    this.setState({currentProducts: currentRows});
  },


  render: function () {
    var productsCode = this.state.currentProducts.map(v =>
      React.createElement(Product, {key: v.code, code: v.code,
        name:v.name, cost:v.cost, stock:v.stock,
        image:v.image, cbSelected: this.rowSelected, selectedRowCode: this.state.selectedRowCode,
        cbDeleted: this.rowDeleted
      })
    )
    return React.DOM.div(
      { className: "Shop" },
      React.DOM.div({ className: "Title" }, this.props.title),
      React.DOM.table(
        { className: "Products-table" },
        React.DOM.thead(
          {className: "Table-header"},
          React.DOM.tr(
            { className: "Table-header-row" },
            React.DOM.th({ className: "Table-header__content" }, "Наименование"),
            React.DOM.th({ className: "Table-header__content" }, "Цена, USD"),
            React.DOM.th({ className: "Table-header__content" }, "Кол-во на складе, шт."),
            React.DOM.th({ className: "Table-header__content" }, "Изображение"),
            React.DOM.th({ className: "Table-header__content" }, "Управление"),
          )
        ),
        React.DOM.tbody({className: "Table-body"}, productsCode)
      )
    );
  },
});
