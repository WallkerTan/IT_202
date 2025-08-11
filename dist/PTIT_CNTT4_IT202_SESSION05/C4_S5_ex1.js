"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(name) {
        this.name = name;
    }
    getsize() { }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getsize() {
        console.log(this.width * this.height);
    }
}
const tv = new Rectangle("sony", 100, 100);
tv.getsize();
