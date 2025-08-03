const { log } = require("console");

let all = (...arr) => {
    return arr.map((e) => e.reduce((Sum, cur) => Sum + cur, 0));
};
console.log(all([1, 2, 3, 4, 5], [9, 8, 7, 6]));
