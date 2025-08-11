"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class job {
    constructor(type) {
        this.type = type;
    }
    prinType() {
        console.log(this.type);
    }
    calculateSalary() { }
}
class PartimeJob extends job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends job {
    calculateSalary() {
        return 10000000;
    }
}
const a = new PartimeJob("haha", 100);
const b = new FulltimeJob("hehe");
console.log(a.calculateSalary());
console.log(b.calculateSalary());
