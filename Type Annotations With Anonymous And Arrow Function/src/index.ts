
// annonymous
const addTwoNum=function (num1:number,num2:number):number {
    return num1+num2;
}

//arrow
const addTwoNum2=(num1:number,num2:number):number=> {
    return num1+num2;
}
const addTwoNum3=(num1:number,num2:number):number=> num1+num2;

let num1:number=45;
let num2:number=35;

console.log(addTwoNum(num1,num2));
console.log(addTwoNum2(num1,num2));
console.log(addTwoNum3(num1,num2));
