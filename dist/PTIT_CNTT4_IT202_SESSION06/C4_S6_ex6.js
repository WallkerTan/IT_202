"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getname() {
        return this.name;
    }
    getid() {
        return this.id;
    }
}
class ClassRoom {
    constructor() {
        this.listStudent = [];
    }
    showclass() {
        this.listStudent.forEach((e) => {
            console.log(e.getid(), e.getname());
        });
    }
    addstudent(std) {
        this.listStudent.push(std);
    }
    filterStudent(id) {
        this.listStudent.forEach((e) => {
            if (e.getid().toString().includes(id.toString())) {
                console.log(e.getid(), e.getname());
            }
        });
    }
    addStudentInClass(allStudent, id) {
        let t = allStudent.filter((e) => e.getid() == id);
        this.listStudent.push(...t);
    }
}
let allStudent = [
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
