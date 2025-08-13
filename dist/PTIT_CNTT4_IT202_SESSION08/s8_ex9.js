"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    return arr.reduce((newarr, cur) => {
        if (Array.isArray(cur)) {
            return newarr.concat(flatten(cur));
        }
        else {
            return newarr.concat(cur);
        }
    }, []);
}
console.log(flatten([1, [2, [3, 4], 5], 6]));
