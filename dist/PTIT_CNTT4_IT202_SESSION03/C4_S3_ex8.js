"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(value) {
    const num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Giá trị không hợp lệ";
    }
    return num1 + num2;
}
function subtract(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Giá trị không hợp lệ";
    }
    return num1 - num2;
}
function multiply(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Giá trị không hợp lệ";
    }
    return num1 * num2;
}
function divide(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Giá trị không hợp lệ";
    }
    if (num2 === 0) {
        return "Không thể chia cho 0";
    }
    return num1 / num2;
}
console.log(add("10", 5));
console.log(subtract("20", "4"));
console.log(multiply("abc", 3));
console.log(divide(100, "0"));
