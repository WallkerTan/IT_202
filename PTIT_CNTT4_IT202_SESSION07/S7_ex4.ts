export {};

abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract displayinfo(): void;
}

class student extends Person {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayinfo(): void {
        console.log(`name: ${this.name}___id: ${this.id}`);
    }
}

class teacher extends Person {
    private subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayinfo(): void {
        console.log(`name: ${this.name}___id: ${this.subject}`);
    }
}

const haha = new student("haha", 1);
const tan = new teacher("tan", "vu tru");

haha.displayinfo();
tan.displayinfo();