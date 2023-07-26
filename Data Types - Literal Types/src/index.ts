// Data Types - Literal Types
type nums=-1|0|1

function compare(num1:number,num2:number):nums {
    if (num1===num2) {
        return 0;
    }else if(num1>num2){
        return 1
    }else{
        return -1;
    }
}
console.log(compare(4,2));
console.log(compare(4,8));
console.log(compare(4,4));
