const { log } = require("console");

const calculate = (a, b, callback) => {
    
    log("tong cua ",a,"va",b,"la",callback(a, b));
};
const callback = (a, b) => a + b;

let a = 5;
let b = 6;

calculate(a, b, callback);
