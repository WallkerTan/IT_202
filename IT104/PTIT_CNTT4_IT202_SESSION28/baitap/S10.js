const { log } = require("console");

const A = [];
const callbackA = (t) => {
    log(t ? "thêm thành công" : "loi");
};
const addtask = (name, A, callbackA) => {
    if (!A.includes(name)) {
        A.push(name);
        callbackA(true);
    } else {
        callbackA(false);
    }
    log(A);
};
const callbackD = (t) => {
    log(t ? "xóa thành công" : "loi");
};
const deletetask = (name, A, callbackD) => {
    if (A.includes(name)) {
        A = A.filter((e) => e != name);
        callbackD(true);
    } else {
        callbackD(false);
    }
    log(A);
};
addtask("tan", A, callbackA);
