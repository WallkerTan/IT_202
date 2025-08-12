"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getname() {
        return this.name;
    }
    getcompany() {
        return this.company;
    }
    getphone() {
        return this.phone;
    }
    showInfo() {
        console.log(`name: ${this.name}___cong ty: ${this.company}___sdt: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    showInfo() {
        console.log(`name: ${this.getname()}___cong ty: ${this.getcompany()}____sdt: ${this.getphone()}___memner: ${this.teamSize}`);
    }
}
const t = new Manager("tan", "ett", "0000", 12);
t.showInfo();
