class User{
    u:string;
    s:number;
    msg:()=>string;
    constructor(username:string,salay:number){
        this.u=username;
        this.s=salay;
        this.msg=function () {
            return `username ${this.u} salay ${this.s}`
        }
    }
    sayHello(){
        return `username ${this.u} salay ${this.s}`
    }
}

let user=new User("gamal",344)
console.log(user.sayHello());
