"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Job type: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
// Test
let parttime = new ParttimeJob("Part-time", 120);
let fulltime = new FulltimeJob("Full-time");
parttime.printType();
console.log(`Salary: ${parttime.calculateSalary()} VND`);
fulltime.printType();
console.log(`Salary: ${fulltime.calculateSalary()} VND`);
