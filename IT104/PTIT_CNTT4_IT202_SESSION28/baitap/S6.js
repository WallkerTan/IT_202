const { log } = require("console");
let t = 1;
const t1 = () => {
    if (t < 7)
        setTimeout(() => {
            log("task: ", t);
            t++;
            t1();
        }, 1000);
};
t1();
