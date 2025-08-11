"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    setname(name) {
        this.name = name;
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
            if (e !== undefined)
                console.log(e.getid(), e.getname());
        });
    }
    addstudent(std) {
        if (std !== undefined)
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
    removeStudent(id, allStudent) {
        const t = this.listStudent.findIndex((e) => e.getid() === id);
        if (t === -1) {
            console.log("khong tim thay");
        }
        else {
            const removed = this.listStudent.splice(t, 1)[0];
            allStudent.push(removed);
        }
    }
    editstudent(name, id) {
        this.listStudent.forEach((e) => {
            if (e.getid() == id) {
                e.setname(name);
            }
        });
    }
}
let allStudent = [
    new student("tan1", 1),
    new student("tan2", 2),
    new student("tan3", 3),
    new student("tan4", 4),
    new student("tan5", 5),
    new student("tan6", 6),
    new student("tan7", 7),
    new student("tan8", 8),
    new student("tan9", 9),
];
const classRoom = new ClassRoom();
classRoom.addstudent(allStudent[1]);
classRoom.addstudent(allStudent[2]);
classRoom.addstudent(allStudent[3]);
classRoom.addstudent(allStudent[4]);
classRoom.addstudent(allStudent[5]);
classRoom.addstudent(allStudent[6]);
classRoom.addstudent(allStudent[7]);
classRoom.addstudent(allStudent[8]);
classRoom.addstudent(allStudent[9]);
classRoom.addstudent(allStudent[20]);
classRoom.showclass();
classRoom.filterStudent(9);
console.log(" ");
classRoom.showclass();
classRoom.addStudentInClass(allStudent, 1);
console.log(" ");
classRoom.showclass();
classRoom.editstudent("huhu", 20);
console.log(" ");
classRoom.showclass();
classRoom.removeStudent(1, allStudent);
console.log(" ");
classRoom.showclass();
