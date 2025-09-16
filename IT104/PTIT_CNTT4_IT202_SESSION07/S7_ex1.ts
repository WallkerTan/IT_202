export {};
class Employee {
    private name: string;
    private company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getname(): string {
        return this.name;
    }
    getcompany(): string {
        return this.company;
    }
    getphone(): string {
        return this.phone;
    }
    showInfo() {
        console.log(
            `name: ${this.name}___cong ty: ${this.company}___sdt: ${this.phone}`
        );
    }
}

class Manager extends Employee {
    private teamSize: number;
    constructor(
        name: string,
        company: string,
        phone: string,
        teamSize: number
    ) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    showInfo() {
        console.log(
            `name: ${this.getname()}___cong ty: ${this.getcompany()}____sdt: ${this.getphone()}___memner: ${
                this.teamSize
            }`
        );
    }
}

const t = new Manager("tan", "ett", "0000", 12);
t.showInfo();
