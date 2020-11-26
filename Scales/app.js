var Scale = /** @class */ (function () {
    function Scale() {
        this.productsArray = [];
    }
    Scale.prototype.add = function (product) {
        this.productsArray.push(product);
    };
    Scale.prototype.getSumScale = function () {
        return this.productsArray.reduce(function (r, v) { return r + v.getScale(); }, 0);
    };
    Scale.prototype.getNameList = function () {
        var names = [];
        this.productsArray.forEach(function (v) { return names.push(v.getName()); });
        return names;
    };
    return Scale;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.productsArray = [];
    return Product;
}());
var scale1 = new Scale();
var tomato = new Product("Помидор", 100);
var apple = new Product("яблоко", 150);
var pear = new Product("груша", 200);
scale1.add(tomato);
scale1.add(apple);
scale1.add(pear);
console.log(scale1.getSumScale());
console.log(scale1.getNameList());
//# sourceMappingURL=app.js.map