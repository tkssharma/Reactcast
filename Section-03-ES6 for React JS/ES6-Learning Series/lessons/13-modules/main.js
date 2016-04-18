/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */

import {sum, pi} from "./lib/math";
alert("2π = " + sum(pi, pi));

import { square, diag } from './lib/math';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

/*import * as math from "./lib/math";
alert("2π = " + math.sum(math.pi, math.pi));*/