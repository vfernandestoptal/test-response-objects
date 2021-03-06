"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_objects_1 = require("response-objects");
const response_objects_2 = __importDefault(require("response-objects"));
const t0 = () => response_objects_1.OK("OK");
const t1 = () => response_objects_2.default(200, "OK");
const t2 = () => response_objects_2.default.OK("OK");
console.log("==== TS imports with esModuleInterop: true ====");
console.log("t0", t0());
console.log("t1", t1());
console.log("t2", t2());
//# sourceMappingURL=ro-ts.js.map