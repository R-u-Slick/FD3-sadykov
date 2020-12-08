var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super.call(this, "Помидор", 100) || this;
    }
    return Tomato;
}(Product));
;
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super.call(this, "Яблоко", 150) || this;
    }
    return Apple;
}(Product));
;
var Pear = /** @class */ (function (_super) {
    __extends(Pear, _super);
    function Pear() {
        return _super.call(this, "Груша", 200) || this;
    }
    return Pear;
}(Product));
;
var scale1 = new Scale();
var tomato = new Tomato;
var apple = new Apple;
var pear = new Pear;
scale1.add(tomato);
scale1.add(apple);
scale1.add(pear);
console.log(scale1.getSumScale());
console.log(scale1.getNameList());
//# sourceMappingURL=app.js.map