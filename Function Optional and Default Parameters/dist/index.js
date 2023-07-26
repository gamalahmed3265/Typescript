"use strict";
let show = false;
function showData(name, age = 24, salay) {
    if (show) {
        return `name: ${name} age: ${age} salay: ${salay}`;
    }
    return 'no data show';
}
console.log(showData("gamal"));
//# sourceMappingURL=index.js.map