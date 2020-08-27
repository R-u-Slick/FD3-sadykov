var GoodsBlock = React.createClass({
  displayName: "GoodsBlock",

  render: function () {
    var goodsCode = [];
    this.props.goods.forEach((a)=>{
      var product = a;
      var productCode = React.DOM.tr(
        { key: product.code, className: "Product" },
        React.DOM.td({ className: "Product-name" }, product.name),
        React.DOM.td({ className: "Cost" }, product.cost),
        React.DOM.td({ className: "Stock" }, product.stock),
        React.DOM.td(
          { className: "Image-cell" },
          React.DOM.img({ className: "Product-image", src: product.image })
        )
      );
      goodsCode.push(productCode);
    })
    return React.DOM.div(
      { className: "GoodsBlock" },
      React.DOM.div({ className: "Title" }, this.props.title),
      React.DOM.table(
        { className: "Goods-table" },
        React.DOM.tr(
          { className: "Table-header" },
          React.DOM.th({ className: "Table-header__content" }, "Наименование"),
          React.DOM.th({ className: "Table-header__content" }, "Цена, USD"),
          React.DOM.th({ className: "Table-header__content" }, "Кол-во на складе, шт."),
          React.DOM.th({ className: "Table-header__content" }, "Изображение"),
        ),
        goodsCode
      )
    );
  },
});
