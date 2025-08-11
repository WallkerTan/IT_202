"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUP(amount) {
        if (amount >= 0) {
            this.speed += amount;
        }
        else {
            console.log("khong hop le");
        }
    }
    speedDown(amount) {
        if (amount >= 0 && amount < this.speed) {
            this.speed -= amount;
        }
        else {
            console.log("khong hop le");
        }
    }
    stop(amount) {
        this.speed = 0;
    }
    getspeed() {
        return this.speed;
    }
}
const t = new Vehicle();
t.speedUP(5);
console.log(t.getspeed());
