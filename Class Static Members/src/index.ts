class User {
    static created: number = 0;
    static getCreate(): void {
        console.log(`${this.created} Object Created`);
    }
    constructor(public username: string) {
        User.created++;
    }
}

let u1=new User("mo")
let u2=new User("gamal")
let u3=new User("ahmed")
let u4=new User("saeed")

User.getCreate();