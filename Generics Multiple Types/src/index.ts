function returnType<T>(val:T,s:T):T {
    return val;
}

console.log(returnType<number>(100,33));
console.log(returnType<string>("gamal","dsaf"));
console.log(returnType<boolean>(false,true));

function returnType2<T>(val:T,s:T):T {
    return val;
}

console.log(returnType2<number>(100,33));
console.log(returnType2<string>("gamal","dsaf"));
console.log(returnType2<boolean>(false,true));
