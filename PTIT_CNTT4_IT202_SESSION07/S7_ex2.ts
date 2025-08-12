export {};

abstract class Vehicle {
    private name: string;
    private speed: number;
    private id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    abstract slowdown(speed: number): void;
    abstract speedUP(speed: number): void;
    abstract showSpeed(): void;
    getspeed(): number {
        return this.speed;
    }
    getid(): number {
        return this.id;
    }
    getname(): string {
        return this.name;
    }
    upSpeed(newSpeed: number) {
        this.speed += newSpeed;
    }
    downSpeed(newSpeed: number) {
        this.speed -= newSpeed;
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    slowdown(speed: number): void {
        if (speed >= 0 && speed < this.getspeed()) {
            this.downSpeed(speed);
        } else {
            console.log("nono");
        }
    }
    speedUP(speed: number): void {
        if (speed >= 0) {
            this.upSpeed(speed);
        } else {
            console.log("huhu");
        }
    }
    showSpeed(): void {
        console.log(this.getspeed());
    }
    showinfo() {
        console.log(
            `name: ${this.getname()} speed: ${this.getspeed()} id: ${this.getid()} gear: ${
                this.gear
            }`
        );
    }
}

const t = new Bicycle("tan", 100, 1, 10);
t.showSpeed();
t.downSpeed(10);
t.showSpeed();
t.showinfo();
