abstract class Food{
    constructor(public title:string){}
    abstract getCooking():void;
}

class Pizza extends Food{
    constructor(title:string,price:number){
        super(title);
    }
    getCooking(): void {
        console.log("Pizza");
        
    }
    
}

class Burger extends Food{
    constructor(title:string,price:number){
        super(title);
    }
    getCooking(): void {
        console.log("Burger");
        
    }
}
let pizza=new Pizza("pizza",34);

pizza.getCooking()