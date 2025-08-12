"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    deposit(temp) {
        if (temp >= 0) {
            this.balance += temp;
            this.history.push(`+ ${temp}`);
        }
        else {
            console.log("nap ko thanh cong");
        }
    }
    withdraw(temp) {
        if (temp >= 0 && temp <= this.balance && this.balance >= 0) {
            this.balance -= temp;
            this.history.push(`- ${temp}`);
        }
        else {
            console.log("rut tien that bai");
        }
    }
    showHistory() {
        this.history.forEach((e) => {
            console.log(e);
        });
    }
}
const t = new SavingAccount(1, 1000000, 1);
t.deposit(1000);
t.withdraw(2000);
t.showHistory();
