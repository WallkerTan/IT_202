"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let word = "hello world apple banana orange pumpkin cucumber";
let check = (str) => {
    let temp = new Map();
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!temp.has(str[i])) {
            temp.set(str[i], true);
            res += str[i];
        }
    }
    return res;
};
let findstr = (str) => {
    //tách thành mảng
    let c = "";
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (check(arr[i]).length > c.length) {
            c = check(arr[i]);
        }
    }
    console.log(c);
};
findstr(word);
