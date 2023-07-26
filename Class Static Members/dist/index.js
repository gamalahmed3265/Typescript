"use strict";
class User {
    static getCreate() {
        console.log(`${this.created} Object Created`);
    }
    constructor(username) {
        this.username = username;
        User.created++;
    }
}
User.created = 0;
let u1 = new User("mo");
let u2 = new User("gamal");
let u3 = new User("ahmed");
let u4 = new User("saeed");
User.getCreate();
//# sourceMappingURL=index.js.map