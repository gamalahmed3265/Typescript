let show=false;
function showData(name: string,age: number =24,salay?: number) {
    if(show){
        return `name: ${name} age: ${age} salay: ${salay}`;
    }
    return 'no data show';
}

console.log(showData("gamal"));
