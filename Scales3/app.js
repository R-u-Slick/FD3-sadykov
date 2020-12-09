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
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.productsArray = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.productsArray.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.productsArray[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.productsArray.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.productCode = 0;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        window.localStorage.setItem(this.productCode.toString(), JSON.stringify(item));
        this.productCode++;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var currentItem = JSON.parse(window.localStorage.getItem(index.toString()));
        return new Product(currentItem.name, currentItem.weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return window.localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(engine) {
        this.engine = engine;
    }
    Scales.prototype.add = function (product) {
        this.engine.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        var count = this.engine.getCount();
        for (var i = 0; i < count; i++) {
            var currentItem = this.engine.getItem(i);
            sum += currentItem.getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        var count = this.engine.getCount();
        for (var i = 0; i < count; i++) {
            var currentItem = this.engine.getItem(i);
            names.push(currentItem.getName());
        }
        return names;
    };
    return Scales;
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
var storageEngineArray = new ScalesStorageEngineArray;
var storageEngineLocal = new ScalesStorageEngineLocalStorage;
var scalesArray = new Scales(storageEngineArray);
var scalesLocal = new Scales(storageEngineLocal);
var tomato = new Product("Помидор", 100);
var apple = new Product("Яблоко", 200);
var pear = new Product("Груша", 300);
scalesArray.add(tomato);
scalesArray.add(apple);
scalesArray.add(pear);
console.log("ScalesArray sum: " + scalesArray.getSumScale());
console.log("ScalesArray list: " + scalesArray.getNameList());
scalesLocal.add(tomato);
scalesLocal.add(apple);
scalesLocal.add(pear);
console.log("ScalesLocal sum: " + scalesLocal.getSumScale());
console.log("ScalesLocal list: " + scalesLocal.getNameList());
//# sourceMappingURL=app.js.map