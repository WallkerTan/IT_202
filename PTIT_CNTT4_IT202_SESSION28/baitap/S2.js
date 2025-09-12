const { log } = require("console");

const delayedCallback = (callback, dellay) => {
    setTimeout(() => {
        callback(dellay);
    }, 1000 * dellay);
};

const callback = (t) => log("da goi call back sau ", t, "giây");

delayedCallback(callback, 1);
