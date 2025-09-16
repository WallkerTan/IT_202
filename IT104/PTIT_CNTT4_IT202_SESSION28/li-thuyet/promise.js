const { promises } = require("dns");

function getdataApi1() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Api1");
            res();
        }, 1000);
    });
}

function getdataApi2() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Api2");
            res();
        }, 1000);
    });
}

function getdataApi3() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Api3");
            res();
        }, 1000);
    });
}

function runAll() {
    getdataApi1()
        .then(() => getdataApi2())
        .then(() => getdataApi3())
        .catch((error) => {
            console.log("loi", error);
        });
}
runAll();
