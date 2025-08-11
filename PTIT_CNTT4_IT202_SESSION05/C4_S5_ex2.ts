export {};

class job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    prinType(): void {
        console.log(this.type);
    }
    calculateSalary(): void {}
}

class PartimeJob extends job {
    private workingHour: number;
    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends job {
    calculateSalary(): number {
        return 10000000;
    }
}

const a = new PartimeJob("haha", 100);
const b = new FulltimeJob("hehe");
console.log(a.calculateSalary());
console.log(b.calculateSalary());
