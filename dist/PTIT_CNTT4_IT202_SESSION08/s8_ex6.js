"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(array, taget) {
    for (const e of array) {
        if (e == taget) {
            console.log(e);
            return;
        }
    }
    console.log("undifine");
}
findElement([1, 2, 3, 4, 5, 6], 5);
