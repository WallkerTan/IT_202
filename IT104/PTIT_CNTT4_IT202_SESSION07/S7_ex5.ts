export {};

abstract class Account {
    id: number;
    usedname: string;
    passwork: string;
    islogin: boolean;
    role: string;
    constructor(
        id: number,
        usedname: string,
        passwork: string,
        islogin: boolean
    ) {
        this.id = id;
        this.islogin = islogin;
        this.passwork = passwork;
        this.usedname = usedname;
    }
    abstract login(): void;
    abstract logout(): void;
}

class userAcc extends Account {
    private status: string;
    constructor(
        id: number,
        usedname: string,
        passwork: string,
        islogin: boolean,
        status: string
    ) {
        super(id, usedname, passwork, islogin);
        this.status = status;
        this.role = "used";
    }
    login(): void {
        if (this.islogin == true) {
            console.log("da dang nhap roi");
        } else {
            this.islogin = true;
            console.log("dang nhap thanh cong");
        }
    }
    logout(): void {
        if (this.islogin == false) {
            console.log("da dang suat roi");
        } else {
            this.islogin = false;
            console.log("dang suat thanh cong");
        }
    }
}

const t = new userAcc(1, "tan", "12345", true, "active");

t.login();
t.logout();
t.login();
