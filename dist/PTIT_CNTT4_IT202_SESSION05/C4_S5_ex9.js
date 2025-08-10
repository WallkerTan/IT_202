"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Member {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = "active";
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStatus() {
        return this.status;
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
}
class Library {
    constructor() {
        this.members = [];
    }
    registerMember(id, name) {
        const newMember = new Member(id, name);
        this.members.push(newMember);
        console.log(`Đã đăng ký thành viên: ${name}`);
    }
    blockMember(id) {
        const member = this.members.find((m) => m.getId() === id);
        if (member) {
            member.setStatus("blocked");
            console.log(`Thành viên ID ${id} đã bị khóa.`);
        }
        else {
            console.log(`Không tìm thấy thành viên có ID ${id}.`);
        }
    }
    showMembers() {
        console.log("Danh sách thành viên:");
        if (this.members.length === 0) {
            console.log("Không có thành viên nào.");
            return;
        }
        this.members.forEach((m) => {
            console.log(`ID: ${m.getId()} | Tên: ${m.getName()} | Trạng thái: ${m.getStatus()}`);
        });
    }
}
const myLibrary = new Library();
myLibrary.registerMember(1, "Nguyễn Văn A");
myLibrary.registerMember(2, "Trần Thị B");
myLibrary.registerMember(3, "Lê Văn C");
myLibrary.showMembers();
myLibrary.blockMember(2);
console.log("Sau khi khóa thành viên:");
myLibrary.showMembers();
