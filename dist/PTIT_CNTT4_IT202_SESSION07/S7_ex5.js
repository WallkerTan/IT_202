"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(id, usedname, passwork, islogin) {
        this.id = id;
        this.islogin = islogin;
        this.passwork = passwork;
        this.usedname = usedname;
    }
}
class userAcc extends Account {
    constructor(id, usedname, passwork, islogin, status) {
        super(id, usedname, passwork, islogin);
        this.status = status;
        this.role = "used";
    }
    login() {
        if (this.islogin == true) {
            console.log("da dang nhap roi");
        }
        else {
            this.islogin = true;
            console.log("dang nhap thanh cong");
        }
    }
    logout() {
        if (this.islogin == false) {
            console.log("da dang suat roi");
        }
        else {
            this.islogin = false;
            console.log("dang suat thanh cong");
        }
    }
}
const t = new userAcc(1, "tan", "12345", true, "active");
t.login();
t.logout();
t.login();
