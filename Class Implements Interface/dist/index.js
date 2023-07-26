"use strict";
class User {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
    }
    save() {
        console.log("save");
    }
    update() {
        console.log("update");
    }
}
let userOne = new User("gamal", false, 'open ons');
console.log(userOne.username);
//# sourceMappingURL=index.js.map