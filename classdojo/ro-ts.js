"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_objects_1 = require("response-objects");
const R = require("response-objects");
const t0 = () => response_objects_1.OK("OK");
const t1 = () => R(200, "OK");
const t2 = () => R.OK("OK");
console.log("==== TS imports with esModuleInterop: false ====");
console.log("t0", t0());
console.log("t1", t1());
console.log("t2", t2());
//# sourceMappingURL=ro-ts.js.map