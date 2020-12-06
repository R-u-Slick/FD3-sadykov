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
var Tomato = /** @class */ (function () {
    function Tomato(weight) {
        this.weight = weight;
        this.name = "Помидор";
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
;
var Apple = /** @class */ (function () {
    function Apple(weight) {
        this.weight = weight;
        this.name = "Яблоко";
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
;
var Pear = /** @class */ (function () {
    function Pear(weight) {
        this.weight = weight;
        this.name = "Груша";
    }
    Pear.prototype.getScale = function () {
        return this.weight;
    };
    Pear.prototype.getName = function () {
        return this.name;
    };
    return Pear;
}());
;
var scale1 = new Scale();
var tomato = new Tomato(100);
var apple = new Apple(200);
var pear = new Pear(300);
scale1.add(tomato);
scale1.add(apple);
scale1.add(pear);
console.log(scale1.getSumScale());
console.log(scale1.getNameList());
//# sourceMappingURL=app.js.map