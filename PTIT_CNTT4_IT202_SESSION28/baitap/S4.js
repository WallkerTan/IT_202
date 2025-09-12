const { log } = require("console");

let i = 0;
const callback = (i) => {
    log("giá trị thứ: ", i);
};
const interval = setInterval(() => {
    callback(i);
    i++;
    if (i == 20) {
        clearInterval(interval);
    }
}, 500);
