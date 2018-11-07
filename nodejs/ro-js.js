const { OK } = require("response-objects");
const R = require("response-objects");

const t0 = () => OK("OK");
const t1 = () => R(200, "OK");
const t2 = () => R.OK("OK");

console.log("==== Node.js imports ====");
console.log("t0", t0());
console.log("t1", t1());
console.log("t2", t2());
