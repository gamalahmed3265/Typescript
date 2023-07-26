"use strict";
class User {
    constructor(_username, salay, address) {
        this._username = _username;
        this.salay = salay;
        this.address = address;
        this.u = _username;
        this.s = salay;
        this.msg = function () {
            return `username ${this.u} salay ${this.s}`;
        };
    }
    get getUsername() {
        return this._username;
    }
    sayHello() {
        return `username ${this.u} salay ${this.s}`;
    }
}
let user = new User("gamal", 344, "df dfg");
console.log(user.sayHello());
//# sourceMappingURL=index.js.map