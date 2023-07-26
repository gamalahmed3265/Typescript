"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
    }
    getCooking() {
        console.log("Pizza");
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
    }
    getCooking() {
        console.log("Burger");
    }
}
let pizza = new Pizza("pizza", 34);
pizza.getCooking();
//# sourceMappingURL=index.js.map