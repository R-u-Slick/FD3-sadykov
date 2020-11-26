
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

let scale1:Scale=new Scale();
let tomato:Product=new Product("Помидор", 100);
let apple:Product=new Product("яблоко", 150);
let pear:Product=new Product("груша", 200);

scale1.add(tomato);
scale1.add(apple);
scale1.add(pear);

console.log(scale1.getSumScale());
console.log(scale1.getNameList());