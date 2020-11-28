
class Scale {
    productsArray:Array<Product>=[];

    constructor() {
    }

    add(product:Product):void {
        this.productsArray.push(product);
    }

    getSumScale():number {
        return this.productsArray.reduce((r, v)=>r+v.getScale(), 0);
    }

    getNameList():Array<string> {
        let names:Array<string>=[];
        this.productsArray.forEach(v=>names.push(v.getName()));
        return names;
    }
    
}

class Product {
    static productsArray:Array<Object>=[];

    name:string;

    weight:number;

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


let scale1:Scale=new Scale();
let tomato:Tomato=new Tomato;
let apple:Apple=new Apple;
let pear:Pear=new Pear;

scale1.add(tomato);
scale1.add(apple);
scale1.add(pear);

console.log(scale1.getSumScale());
console.log(scale1.getNameList());