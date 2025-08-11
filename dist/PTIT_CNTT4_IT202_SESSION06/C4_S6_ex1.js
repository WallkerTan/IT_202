"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
let rect = new Rectangle("Rectangle", 10, 5);
console.log(rect.getName());
rect.getSize();
