"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemtype: "itemtype", title: "title", isbtn: false });
itemOne.add({ itemtype: "itemtype", title: "title", isbtn: false });
console.log(itemOne);
console.log("*".repeat(40));
let itemTwo = new Collection();
itemTwo.add({ itemtype: "adf", title: "sf", style: "sdf", price: 32 });
itemTwo.add({ itemtype: "rett", title: "titsale", style: "aeaa", price: 342 });
console.log(itemTwo);
//# sourceMappingURL=index.js.map