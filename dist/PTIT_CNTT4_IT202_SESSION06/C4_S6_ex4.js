"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const myCircle = new Circle(5);
console.log("Circle Area:", myCircle.calculateArea());
console.log("Circle Perimeter:", myCircle.calculatePerimeter());
const myRectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", myRectangle.calculateArea());
console.log("Rectangle Perimeter:", myRectangle.calculatePerimeter());
