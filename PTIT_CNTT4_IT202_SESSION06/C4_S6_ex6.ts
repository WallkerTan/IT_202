export {};

class student {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getname(): string {
        return this.name;
    }

    getid(): number {
        return this.id;
    }
}

class ClassRoom {
    private listStudent: student[];
    constructor() {
        this.listStudent = [];
    }
    showclass() {
        this.listStudent.forEach((e) => {
            console.log(e.getid(), e.getname());
        });
    }
    addstudent(std: student) {
        this.listStudent.push(std);
    }

    filterStudent(id: number) {
        this.listStudent.forEach((e) => {
            if (e.getid().toString().includes(id.toString())) {
                console.log(e.getid(), e.getname());
            }
        });
    }

    addStudentInClass(allStudent: student[], id: number) {
        let t = allStudent.filter((e) => e.getid() == id);
        this.listStudent.push(...t);
    }
}

let allStudent: student[] = [
    new student("Alice", 1),
    new student("Bob", 12),
    new student("Charlie", 21),
];

const classRoom = new ClassRoom();
classRoom.addstudent(allStudent[0]);
classRoom.addStudentInClass(allStudent, 12);

console.log("Danh sách học sinh:");
classRoom.showclass();

console.log("Học sinh có id chứa số 1:");
classRoom.filterStudent(1);
