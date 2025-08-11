"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.company = company;
        this.year = year;
    }
    getyear() {
        return this.year;
    }
}
class full extends Vehicle {
    constructor(name, year, company, id) {
        super(name, year, company);
        this.id = id;
    }
    getcompany() {
        return this.company;
    }
}
const a = new full("tan", 1000, "tanentertypement", 1);
console.log(`${a.name}
    ${a.getyear()}
    ${a.id}
    ${a.getcompany()}`);
