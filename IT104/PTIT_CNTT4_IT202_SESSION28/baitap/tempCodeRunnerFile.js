import { log } from "console";
const A = [1, 2, 3, 4, 5, 6];

let t = 0;

const myForEach = (A, callback) => {
    if (t < A.length)
        setTimeout(() => {
            callback(t, A);
            t++;
            myForEach(A, callback);
        }, 1000);
};
const callback = (i, A) => {
    log(`${i} | ${A[i]} | mảng: ${A}`);
};
myForEach(A, callback);
