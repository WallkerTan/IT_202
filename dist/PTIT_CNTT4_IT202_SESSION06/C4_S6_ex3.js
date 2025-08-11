"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Method thông thường
    getName() {
        return this.name;
    }
}
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}
// Test
let shapes = [new Circle("Circle", 5), new Square("Square", 4)];
shapes.forEach((s) => {
    console.log(`${s.getName()} area = ${s.getArea()}`);
});
