class Player {
    constructor(public name: string) { }
    attack(): void {
        console.log("Attack Now");

    }
}
class Amazon extends Player {
    constructor(public name: string, public spears: number) {
        super(name);
    }

    attack(): void {
        super.attack();
        console.log("Attack");
        this.spears -= 1;

    }
}
class Barbarian extends Player {
    constructor(public name: string, public axeDurability: number) {
        super(name);
    }

    override  attack(): void {
        // super.attack();
        console.log("Barbarian");
        this.axeDurability -= 1;

    }
}

let amazon = new Amazon("fdf", 100)
amazon.attack();
console.log(amazon.spears);

let barbarian = new Barbarian("fdf", 100)
barbarian.attack();
console.log(barbarian.axeDurability);
