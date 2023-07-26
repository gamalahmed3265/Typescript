"use strict";
function addAll(...nums) {
    let reults = 0;
    nums.forEach((num) => reults + num);
    return reults;
}
console.log(addAll(5, 4, 2, 1, 1, 5, +true));
//# sourceMappingURL=index.js.map