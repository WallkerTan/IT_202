"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    getspeed() {
        return this.speed;
    }
    getid() {
        return this.id;
    }
    getname() {
        return this.name;
    }
    upSpeed(newSpeed) {
        this.speed += newSpeed;
    }
    downSpeed(newSpeed) {
        this.speed -= newSpeed;
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    slowdown(speed) {
        if (speed >= 0 && speed < this.getspeed()) {
            this.downSpeed(speed);
        }
        else {
            console.log("nono");
        }
    }
    speedUP(speed) {
        if (speed >= 0) {
            this.upSpeed(speed);
        }
        else {
            console.log("huhu");
        }
    }
    showSpeed() {
        console.log(this.getspeed());
    }
    showinfo() {
        console.log(`name: ${this.getname()} speed: ${this.getspeed()} id: ${this.getid()} gear: ${this.gear}`);
    }
}
const t = new Bicycle("tan", 100, 1, 10);
t.showSpeed();
t.downSpeed(10);
t.showSpeed();
t.showinfo();
