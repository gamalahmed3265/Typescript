interface User{
    id:number,
    username:string,
    country:string
}

let user:User={
    id:34344,
    username:"gamal",
    country:'eg'
}
console.log(user);

function getData(user:User) {
    console.log(`ID IS ${user.id}`);
    console.log(`UserName IS ${user.username}`);
    console.log(`Country IS ${user.country}`);
}

getData(user);