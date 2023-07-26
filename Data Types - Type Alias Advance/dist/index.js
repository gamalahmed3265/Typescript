"use strict";
function getActions(btn) {
    console.log(`Action for Button Up ${btn.up}`);
    console.log(`Action for Button down  ${btn.down}`);
    console.log(`Action for Button left ${btn.left}`);
    console.log(`Action for Button right ${btn.right}`);
}
getActions({ up: "Jump", down: "Go Down", left: "Go left", right: "right" });
function getActions2(btn) {
    console.log(`Action for Button Up ${btn.up}`);
    console.log(`Action for Button down  ${btn.down}`);
    console.log(`Action for Button left ${btn.left}`);
    console.log(`Action for Button right ${btn.right}`);
    console.log(`Action for Button right ${btn.x}`);
}
getActions2({ up: "Jump", down: "Go Down", left: "Go left", right: "right", x: false });
//# sourceMappingURL=index.js.map