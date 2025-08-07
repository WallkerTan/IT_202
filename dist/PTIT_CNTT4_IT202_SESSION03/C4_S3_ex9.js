"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm chuyển đổi input và kiểm tra hợp lệ
function parseNumber(value) {
    const num = typeof value === 'number' ? value : Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const x = parseNumber(a);
    const y = parseNumber(b);
    if (x === null || y === null)
        return 'Input không hợp lệ';
    return x + y;
}
function subtract(a, b) {
    const x = parseNumber(a);
    const y = parseNumber(b);
    if (x === null || y === null)
        return 'Input không hợp lệ';
    return x - y;
}
function multiply(a, b) {
    const x = parseNumber(a);
    const y = parseNumber(b);
    if (x === null || y === null)
        return 'Input không hợp lệ';
    return x * y;
}
function divide(a, b) {
    const x = parseNumber(a);
    const y = parseNumber(b);
    if (x === null || y === null)
        return 'Input không hợp lệ';
    if (y === 0)
        return 'Không thể chia cho 0';
    return x / y;
}
// Hàm lũy thừa
function power(base, exponent) {
    const x = parseNumber(base);
    const y = parseNumber(exponent);
    if (x === null || y === null)
        return 'Input không hợp lệ';
    return Math.pow(x, y);
}
// Hàm căn bậc n (√)
function sqrt(base, root) {
    const x = parseNumber(base);
    const y = parseNumber(root);
    if (x === null || y === null || y === 0)
        return 'Input không hợp lệ';
    return Math.pow(x, 1 / y);
}
function factorial(n) {
    const x = parseNumber(n);
    if (x === null || x < 0 || !Number.isInteger(x))
        return 'Input không hợp lệ';
    let result = 1;
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    return result;
}
console.log(add("10", "5"));
console.log(subtract("10", 3));
console.log(multiply(4, "2"));
console.log(divide(10, "0"));
console.log(power("2", 3));
console.log(sqrt(27, 3));
console.log(factorial("5"));
console.log(factorial("abc"));
