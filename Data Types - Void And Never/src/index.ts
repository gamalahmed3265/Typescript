function alwaysLog(name:string):never {
    while (true) {
        console.log(name);
    }
    
    console.log("df"); // unreach code
}
alwaysLog("hi")
console.log("df"); // unreach code

// unreach code
const fial=(erro:string)=>{
    throw new Error(erro)
}