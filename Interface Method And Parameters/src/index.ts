interface User{
    id:number,
    username:string,
    country:string,
    sayHello():string,
    sayWelcome:()=>string,
    getDouble(num:number): number
}

let user:User={
    id:34344,
    username:"gamal",
    country:'eg',
    sayHello(){
        return `Hello ${this.username}`
    },
    sayWelcome:()=>`Welcome ${user.username}`,
    getDouble(n){
        return n*2
    }
}
console.log(user);

function getData(user:User) {
    console.log(`ID IS ${user.id}`);
    console.log(`UserName IS ${user.username}`);
    console.log(`Country IS ${user.country}`);
}

getData(user);