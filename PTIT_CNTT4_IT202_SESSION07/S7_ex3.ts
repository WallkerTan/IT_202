export {};

abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    abstract makeName(): void;
}
class cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeName(): void {
        console.log(this.name);
    }
    makeNoise(): void {
        console.log("meo meo cc");
    }
}

class dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeName(): void {
        console.log(this.name);
    }
    makeNoise(): void {
        console.log("gau gau cc");
    }
}

const c = new cat("mèo");
const d = new dog("chos");
c.makeName();
c.makeNoise();
d.makeName();
d.makeNoise();