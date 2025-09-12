const { log } = require("console");

const A = [1, 2, 3, 4, 5, 6];

let i = 0;
const processArray = (A, callback) => {
    if (i < A.length)
        setTimeout(() => {
            callback(i, A[i]);
            i++;
            processArray(A, callback);
        }, 1000);
};

const callback = (i, t) => {
    log("giá trị thứ: ", i, t);
};
processArray(A, callback);
