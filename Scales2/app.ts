
interface IScalable {

    getScale():number;
    getName():string;

}

class Scale {
    productsArray:Array<IScalable>=[];

    constructor() {
    }

    add(product:IScalable):void {
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


class Tomato implements IScalable{
    name:string;

    constructor(private weight:number) {
        this.name = "Помидор";
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;        
    }  
};

class Apple implements IScalable{
    name:string;

    constructor(private weight:number) {
        this.name = "Яблоко";
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;        
    }  
};

class Pear implements IScalable{
    name:string;

    constructor(private weight:number) {
        this.name = "Груша";
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;        
    }  
};


let scale1:Scale=new Scale();
let tomato:Tomato=new Tomato(100);
let apple:Apple=new Apple(200);
let pear:Pear=new Pear(300);

scale1.add(tomato);
scale1.add(apple);
scale1.add(pear);

console.log(scale1.getSumScale());
console.log(scale1.getNameList());