export {};

abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method thông thường
    getName(): string {
        return this.name;
    }

    // Abstract method - bắt buộc override
    abstract getArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    private side: number;

    constructor(name: string, side: number) {
        super(name);
        this.side = side;
    }

    getArea(): number {
        return this.side * this.side;
    }
}

// Test
let shapes: Shape[] = [new Circle("Circle", 5), new Square("Square", 4)];

shapes.forEach((s) => {
    console.log(`${s.getName()} area = ${s.getArea()}`);
});
