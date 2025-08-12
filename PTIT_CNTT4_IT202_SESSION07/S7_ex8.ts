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

class checkingAccount extends Account {
    overdraftLimit: number;
    constructor(
        accountNumber: number,
        balance: number,
        overdraftLimit: number
    ) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
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
        if (temp >= 0 && Math.abs(this.balance - temp) <= this.overdraftLimit) {
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
    getbalance() {
        return this.balance;
    }
}

const t = new checkingAccount(1, 100000, 100000);
t.deposit(1000);
console.log(t.getbalance());

t.withdraw(100000);
t.showHistory();
console.log(t.getbalance());
t.withdraw(101000);
t.withdraw(1);
