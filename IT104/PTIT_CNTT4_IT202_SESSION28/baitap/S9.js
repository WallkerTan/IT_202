const { log } = require("console");

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const callback = (t) => t * 2;
const myMap = (A, callback) => {
    for (let i = 0; i < A.length; i++) {
        A[i] = callback(A[i]);
    }
    log(`[${A}]`);
};
myMap(A, callback);
