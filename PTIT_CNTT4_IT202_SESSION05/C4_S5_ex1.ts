export {};

class Shape {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    getsize(): void {}
}

class Rectangle extends Shape {
    public width: number;
    public height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getsize(): void {
        console.log(this.width * this.height);
    }
}

const tv = new Rectangle("sony", 100, 100);

tv.getsize();
 