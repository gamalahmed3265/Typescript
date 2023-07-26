
interface Book{
    itemtype:string;
    title:string;
    isbtn:boolean
}

interface Game{
    itemtype:string;
    title:string;
    style:string;
    price:number
}

class Collection<T>{
    public data:T[] =[];
    add(item:T):void{
        this.data.push(item);
    }
}

let itemOne=new Collection<Book>();

itemOne.add({itemtype:"itemtype",title:"title",isbtn:false})
itemOne.add({itemtype:"itemtype",title:"title",isbtn:false})

console.log(itemOne);

console.log("*".repeat(40));


let itemTwo=new Collection<Game>();

itemTwo.add({itemtype:"adf",title:"sf",style:"sdf",price:32})
itemTwo.add({itemtype:"rett",title:"titsale",style:"aeaa",price:342})

console.log(itemTwo);
