"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function temp(one, two) {
    let result = Object.assign({}, one);
    for (const key in two) {
        if (key in result) {
            console.log(two[key]);
            console.log(two);
            result[key] = [result[key], two[key]];
        }
        else {
            result[key] = two[key];
        }
    }
    return result;
}
const d = { id: 1, name: "Alice" };
const c = { id: 2, age: 25 };
console.log(temp(c, d));
