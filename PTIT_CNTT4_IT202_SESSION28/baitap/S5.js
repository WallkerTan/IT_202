const { log } = require("console");

const checkCondition = (t, callback) => {
    callback(t);
};

const callback = (t) => {
    setTimeout(() => {
        log("điều kiện trả về: ", t);
    }, 1000);
};
checkCondition(true, callback);
