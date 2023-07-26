"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attack Now");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.name = name;
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log("Attack");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.name = name;
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("Barbarian");
        this.axeDurability -= 1;
    }
}
let amazon = new Amazon("fdf", 100);
amazon.attack();
console.log(amazon.spears);
let barbarian = new Barbarian("fdf", 100);
barbarian.attack();
console.log(barbarian.axeDurability);
//# sourceMappingURL=index.js.map