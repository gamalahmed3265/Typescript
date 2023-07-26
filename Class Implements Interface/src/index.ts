interface Settings{
    theme:boolean,
    font?:string,
    save():void
}

class User implements Settings{
    constructor(public username:string,public theme:boolean,font:string){

    }
    save(): void {
        console.log("save");
        
    }
    update(): void {
        console.log("update");
        
    }

}

let userOne=new User("gamal",false,'open ons');

console.log(userOne.username);
