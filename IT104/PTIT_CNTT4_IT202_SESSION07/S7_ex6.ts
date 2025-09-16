export {};

abstract class Account {
    id: number;
    usedname: string;
    passwork: string;
    islogin: boolean;
    role: string;
    constructor(id: number, usedname: string, passwork: string) {
        this.id = id;
        this.islogin = true;
        this.passwork = passwork;
        this.usedname = usedname;
    }
    abstract login(): void;
    abstract logout(): void;
}

class userAcc extends Account {
    private status: string;
    constructor(id: number, usedname: string, passwork: string) {
        super(id, usedname, passwork);
        this.status = "active";
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
    getstatus(): string {
        return this.status;
    }
    ban() {
        if (this.status == "active") {
            this.status = "banner";
        }
    }
    unBan() {
        if (this.status == "banner") {
            this.status = "active";
        }
    }
}

class Admin extends Account {
    listUsed: userAcc[];
    constructor(id: number, usedname: string, passwork: string) {
        super(id, usedname, passwork);
        this.role = "Admin";
        this.listUsed = [];
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
    abbUsed(used: userAcc) {
        if (used != undefined) {
            this.listUsed.push(used);
        }
    }

    banner(id: number) {
        this.listUsed.forEach((e) => {
            if (e.id == id && e.getstatus() == "active") {
                e.ban();
            }
        });
    }
    active(id: number) {
        this.listUsed.forEach((e) => {
            if (e.id == id && e.getstatus() == "banner") {
                e.unBan();
            }
        });
    }
    showlist() {
        this.listUsed.forEach((e) => {
            console.log(
                `id: ${e.id}___name: ${e.usedname}___passwork: ${
                    e.passwork
                }___islogin: ${e.islogin}___status:${e.getstatus()}`
            );
        });
    }

    banused(id: number) {
        let index = this.listUsed.findIndex((e) => e.id == id);
        if (index == -1) {
            console.log("khong tim thay");
        } else {
            this.listUsed[index].ban();
        }
    }
    unBanUsed(id: number) {
        let index = this.listUsed.findIndex((e) => e.id == id);
        if (index == -1) {
            console.log("khong tim thay");
        } else {
            this.listUsed[index].unBan();
        }
    }
}

const t: userAcc[] = [
    new userAcc(1, "tan1", "12345"),
    new userAcc(2, "tan2", "12345"),
    new userAcc(3, "tan3", "12345"),
    new userAcc(4, "tan4", "12345"),
    new userAcc(5, "tan5", "12345"),
];

const tan = new Admin(1, "tan", "123456");
tan.abbUsed(t[1]);
tan.abbUsed(t[2]);
tan.abbUsed(t[3]);
tan.abbUsed(t[4]);
tan.abbUsed(t[0]);
tan.showlist();
tan.banner(1);
tan.showlist();
