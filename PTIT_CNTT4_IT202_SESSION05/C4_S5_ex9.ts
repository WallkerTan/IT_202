export {};
class Member {
    private id: number;
    private name: string;
    private status: string; // "active" hoặc "blocked"

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.status = "active";
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getStatus(): string {
        return this.status;
    }

    setStatus(newStatus: string): void {
        this.status = newStatus;
    }
}

class Library {
    private members: Member[] = [];

    registerMember(id: number, name: string): void {
        const newMember = new Member(id, name);
        this.members.push(newMember);
        console.log(`Đã đăng ký thành viên: ${name}`);
    }

    blockMember(id: number): void {
        const member = this.members.find((m) => m.getId() === id);
        if (member) {
            member.setStatus("blocked");
            console.log(`Thành viên ID ${id} đã bị khóa.`);
        } else {
            console.log(`Không tìm thấy thành viên có ID ${id}.`);
        }
    }

    showMembers(): void {
        console.log("Danh sách thành viên:");
        if (this.members.length === 0) {
            console.log("Không có thành viên nào.");
            return;
        }
        this.members.forEach((m) => {
            console.log(
                `ID: ${m.getId()} | Tên: ${m.getName()} | Trạng thái: ${m.getStatus()}`
            );
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
