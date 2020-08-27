var GoodsBlock = React.createClass({
  displayName: "GoodsBlock",

  render: function () {
    var goodsCode = [];
    for (var a = 0; a < this.props.goods.length; a++) {
      var product = this.props.goods[a];
      var productCode = React.DOM.s(
        { key: product.code, className: "Product" },
        React.DOM.span({ className: "Cost" }, product.cost),
        React.DOM.span({ className: "Stock" }, product.stock),
        React.DOM.img({ className:"Product-image", src: product.image})
      );
      goodsCode.push(productCode);
    }
    return React.DOM.div(
      { className: "GoodsBlock" },
      React.DOM.div({ className: "Title" }, this.props.title),
      React.DOM.div({ className: "Goods-table" }, goodsCode)
    );
  },
});
