"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set setWidth(_width) {
        if (_width > 0) {
            this.width = _width;
        }
        else {
            console.log("hai za!!!");
        }
    }
    set setHeight(_height) {
        if (_height > 0) {
            this.height = _height;
        }
        else {
            console.log("hai za!!!");
        }
    }
    getheight() {
        return this.height;
    }
    getwidth() {
        return this.width;
    }
}
const a = new Rectangle(10, 20);
console.log(a.getheight(), a.getwidth());
console.log(a.getheight() * a.getwidth());
console.log(2 * (a.getheight() + a.getwidth()));
