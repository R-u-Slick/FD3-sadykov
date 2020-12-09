interface IStorageEngine {
    addItem(item:Product):void;  
    getItem(index:number):Product; 
    getCount():number;  
}

class ScalesStorageEngineArray implements IStorageEngine {
    productsArray:Array<Product>=[];
    addItem(item:Product):void {
        this.productsArray.push(item);
    }
    getItem(index:number):Product {
        return this.productsArray[index];
    }
    getCount():number {
        return this.productsArray.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    productCode=0;
    addItem(item:Product):void {
        window.localStorage.setItem(this.productCode.toString(),JSON.stringify(item));
        this.productCode++;
    }
    getItem(index:number):Product {
       let currentItem = JSON.parse(window.localStorage.getItem(index.toString()));
       return new Product(currentItem.name, currentItem.weight);
    }
    getCount():number {
        return window.localStorage.length;
    }
}

class Scales<StorageEngine extends IStorageEngine> {
    constructor(private engine:StorageEngine) {
    }

    add(product:Product):void {
        this.engine.addItem(product);
    }

    getSumScale():number {
        let sum:number = 0;
        let count = this.engine.getCount();
        for (var i=0; i<count; i++) {
            let currentItem:Product=this.engine.getItem(i);
            sum+=currentItem.getScale();
        }
        return sum;
    }

    getNameList():Array<string> {
        let names:Array<string>=[];
        let count = this.engine.getCount();
        for (var i=0; i<count; i++) {
            let currentItem:Product=this.engine.getItem(i);           
            names.push(currentItem.getName());
        }
        return names;
    }
    
}

class Product {
    private name:string;
    private weight:number;

    constructor(_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight; 
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;        
    }  
}

class Tomato extends Product{
    constructor() {
        super("Помидор", 100); 
    }
};

class Apple extends Product{
    constructor() {
        super("Яблоко", 150); 
    }
};

class Pear extends Product{
    constructor() {
        super("Груша", 200); 
    }
};

let storageEngineArray = new ScalesStorageEngineArray;
let storageEngineLocal = new ScalesStorageEngineLocalStorage;

let scalesArray=new Scales<ScalesStorageEngineArray>(storageEngineArray);
let scalesLocal=new Scales<ScalesStorageEngineLocalStorage>(storageEngineLocal);

let tomato:Product=new Product("Помидор", 100);
let apple:Product=new Product("Яблоко", 200);
let pear:Product=new Product("Груша", 300);

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



