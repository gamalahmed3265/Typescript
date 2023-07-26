class User{
    private u:string;
    protected s:number;
    msg:()=>string;
    constructor(private _username:string,protected salay:number,public readonly address:string){
        this.u=_username;
        this.s=salay;
        this.msg=function () {
            return `username ${this.u} salay ${this.s}`
        }
        
    }
    get getUsername():string{
        return this._username
    }
    sayHello(){
        return `username ${this.u} salay ${this.s}`
    }
}

let user=new User("gamal",344,"df dfg")
console.log(user.sayHello());
