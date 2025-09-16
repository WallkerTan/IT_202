export {};

class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    set setWidth(_width: number) {
        if (_width > 0) {
            this.width = _width;
        } else {
            console.log("hai za!!!");
        }
    }

    set setHeight(_height: number) {
        if (_height > 0) {
            this.height = _height;
        } else {
            console.log("hai za!!!");
        }
    }

    getheight(): number {
        return this.height;
    }
    getwidth(): number {
        return this.width;
    }
}

const a = new Rectangle(10, 20);

console.log(a.getheight(), a.getwidth());
console.log(a.getheight() * a.getwidth());
console.log(2 * (a.getheight() + a.getwidth()));
