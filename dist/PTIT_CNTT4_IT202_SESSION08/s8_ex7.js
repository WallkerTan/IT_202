"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    return arr.reduce((newarr, cur) => newarr.concat(cur), []);
}
const arr = [[1, 2], [3, 4], [5]];
const flattened = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened);
