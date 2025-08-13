"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function temp(aray) {
    for (const e of aray) {
        if (typeof e == "number" && e % 2 === 0) {
            console.log(e);
            return;
        }
    }
    console.log("undifine");
}
temp([1, 2, 3, 4, 5, 6]);
temp(["a", "b", "c"]);
