let myImage=document.querySelector("img") as HTMLImageElement;
let myImage2= <HTMLImageElement> document.querySelector("img");

console.log(myImage.src);
console.log(myImage2.src);


let data="100"
console.log((data as string).repeat(3));

let data2=100
console.log((data as string).repeat(3));

let data3:any=100
console.log((data as string).repeat(3));
