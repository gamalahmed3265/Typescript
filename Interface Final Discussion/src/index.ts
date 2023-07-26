interface User{
    id:number,
    username:string,
    country:string
}
interface Moderator extends User{
    role:boolean|number
}
interface Admain extends Moderator, User{
    prodect:boolean
}
let user:Moderator={
    id:234,
    username:"string",
    country:"string",
    role:false
}
console.log(user.country);
