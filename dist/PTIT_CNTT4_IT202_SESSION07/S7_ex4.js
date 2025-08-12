"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayinfo() {
        console.log(`name: ${this.name}___id: ${this.id}`);
    }
}
class teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayinfo() {
        console.log(`name: ${this.name}___id: ${this.subject}`);
    }
}
const haha = new student("haha", 1);
const tan = new teacher("tan", "vu tru");
haha.displayinfo();
tan.displayinfo();
