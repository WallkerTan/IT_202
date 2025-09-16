export {};

abstract class Account {
    accountNumber: number;
    protected balance: number;
    protected history: string[];
    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }
    abstract deposit(temp: number): void;
    abstract withdraw(temp: number): void;
    abstract showHistory(): void;
}

class SavingAccount extends Account {
    interestRate: number;
    constructor(accountNumber: number, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    deposit(temp: number): void {
        if (temp >= 0) {
            this.balance += temp;
            this.history.push(`+ ${temp}`);
        } else {
            console.log("nap ko thanh cong");
        }
    }
    withdraw(temp: number): void {
        if (temp >= 0 && temp <= this.balance && this.balance >= 0) {
            this.balance -= temp;
            this.history.push(`- ${temp}`);
        } else {
            console.log("rut tien that bai");
        }
    }
    showHistory(): void {
        this.history.forEach((e) => {
            console.log(e);
        });
    }
}

const t = new SavingAccount(1, 1000000, 1);
t.deposit(1000);
t.withdraw(2000);
t.showHistory();

