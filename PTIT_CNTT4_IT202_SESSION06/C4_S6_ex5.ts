export {};

interface changeSpeed {
    speedUP(amount: number): void;
    speedDown(amount: number): void;
    stop(amount: number): void;
}

class Vehicle implements changeSpeed {
    private speed: number;
    constructor() {
        this.speed = 0;
    }
    speedUP(amount: number): void {
        if (amount >= 0) {
            this.speed += amount;
        } else {
            console.log("khong hop le");
        }
    }

    speedDown(amount: number): void {
        if (amount >= 0 && amount < this.speed) {
            this.speed -= amount;
        } else {
            console.log("khong hop le");
        }
    }

    stop(amount: number): void {
        this.speed = 0;
    }

    getspeed(): number {
        return this.speed;
    }
}
const t = new Vehicle();
t.speedUP(5);
console.log(t.getspeed());
