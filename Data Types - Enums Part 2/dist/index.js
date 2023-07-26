"use strict";
var kids;
(function (kids) {
    kids[kids["five"] = 25] = "five";
    kids[kids["seven"] = 20] = "seven";
    kids[kids["ten"] = 15] = "ten";
})(kids || (kids = {}));
var Level;
(function (Level) {
    Level[Level["kid"] = 25] = "kid";
    Level[Level["easy"] = 9] = "easy";
    Level[Level["medium"] = 17] = "medium";
    Level[Level["hard"] = 3] = "hard";
})(Level || (Level = {}));
const getLevel = () => `the level is ${Level.kid}`;
//# sourceMappingURL=index.js.map