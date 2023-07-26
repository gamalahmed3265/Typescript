"use strict";
var Level;
(function (Level) {
    Level[Level["kids"] = 15] = "kids";
    Level[Level["easy"] = 9] = "easy";
    Level[Level["medium"] = 6] = "medium";
    Level[Level["hard"] = 3] = "hard";
})(Level || (Level = {}));
const getLevel = () => `the level is ${Level.kids}`;
//# sourceMappingURL=index.js.map