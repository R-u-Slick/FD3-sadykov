
class Scale {
    static productsArray:Array<Object>=[];

    num:string;

    wheels:number=4;

    constructor(_num:string) {
        Car.carsCount++;
        this.num=_num; 
    }

    add(product:Object):void {
        Scale.productsArray.push(product);
    }

    getSumScale():void {

    }

    getNameList():void {

    }
    
}


class Product {
    static productsArray:Array<Object>=[];

    num:string;

    wheels:number=4;

    constructor(_num:string) {
        Car.carsCount++;
        this.num=_num; 
    }

    add(product:Object):void {
        Scale.productsArray.push(product);
    }

    getSumScale():void {

    }

    getNameList():void {

    }
    
}



let car1:Car=new Car("2870-ОГО");
car1.show();

let car2:Car=new Car("233322");
car2.show();

console.log("всего машинок создано: "+Car.carsCount);
