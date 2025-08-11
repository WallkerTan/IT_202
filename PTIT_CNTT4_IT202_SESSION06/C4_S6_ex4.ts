export {};

interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const myCircle = new Circle(5);
console.log("Circle Area:", myCircle.calculateArea());
console.log("Circle Perimeter:", myCircle.calculatePerimeter());

const myRectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", myRectangle.calculateArea());
console.log("Rectangle Perimeter:", myRectangle.calculatePerimeter());
