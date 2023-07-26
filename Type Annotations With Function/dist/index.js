"use strict";
let show = false;
function showData(name, age, salay) {
    if (show) {
        return `name: ${name} age: ${age} salay: ${salay}`;
    }
    return 'no data show';
}
console.log(showData("gamal", 22, 2033));
//# sourceMappingURL=index.js.map