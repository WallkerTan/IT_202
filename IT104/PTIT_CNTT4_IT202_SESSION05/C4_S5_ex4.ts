export {};

class Vehicle {
    name: string;
    private year: number;
    protected company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.company = company;
        this.year = year;
    }
    getyear(): number {
        return this.year;
    }
}

class full extends Vehicle {
    readonly id: number;
    constructor(name: string, year: number, company: string, id: number) {
        super(name, year, company);
        this.id = id;
    }
    getcompany(): string {
        return this.company;
    }
}

const a = new full("tan", 1000, "tanentertypement", 1);
console.log(`${a.name}
    ${a.getyear()}
    ${a.id}
    ${a.getcompany()}`);
