"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(obj, updates) {
    let result = Object.assign({}, obj);
    for (const key in updates) {
        if (key in result) {
            result[key] = updates[key];
        }
    }
    return result;
}
console.log(partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { age: 31 }));
