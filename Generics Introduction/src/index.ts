function returnType<GenerticType>(val:GenerticType) {
    return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("gamal"));
console.log(returnType<boolean>(false));
