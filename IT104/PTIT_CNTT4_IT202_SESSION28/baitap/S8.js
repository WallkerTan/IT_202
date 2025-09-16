const { log } = require("console");

const A = [1, 2, 2, 4, 5, 6, 7, 8, 9];
const cur = [];
const callback = (t) => {
    cur.push(t);
};
const myFilter = (A, number, calback) => {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === number) calback(A[i]);
    }
    log(`[${cur}]`);
};
myFilter(A, 10, callback);
