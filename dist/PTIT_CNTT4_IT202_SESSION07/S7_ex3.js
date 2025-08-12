"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeName() {
        console.log(this.name);
    }
    makeNoise() {
        console.log("meo meo cc");
    }
}
class dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeName() {
        console.log(this.name);
    }
    makeNoise() {
        console.log("gau gau cc");
    }
}
const c = new cat("mèo");
const d = new dog("chos");
c.makeName();
c.makeNoise();
d.makeName();
d.makeNoise();
