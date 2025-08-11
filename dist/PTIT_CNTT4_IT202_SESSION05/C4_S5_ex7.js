"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class book {
    constructor(title, author, id) {
        this.author = author;
        this.title = title;
        this.id = id;
    }
    settitle(title) {
        this.title = title;
    }
    setauthor(author) {
        this.author = author;
    }
    gettitle() {
        console.log(this.title);
    }
    getauthor() {
        console.log(this.author);
    }
    getid() {
        return this.id;
    }
}
class Library {
    constructor() {
        this.listBook = [];
    }
    pushbook(b) {
        this.listBook.push(b);
    }
    outBook() {
        this.listBook.forEach((e) => {
            e.gettitle();
            e.getauthor();
            e.getid();
        });
    }
    update(title, author, id) {
        this.listBook.forEach((e) => {
            if (e.getid() == id) {
                e.settitle(title);
                e.setauthor(author);
            }
        });
    }
}
const a = new book("tan", "tan5", 1);
const b = new book("tan2", "tan4", 2);
const c = new book("tan3", "tan3", 3);
const d = new book("tan4", "tan2", 4);
const e = new book("tan5", "tan1", 5);
const l = new Library();
l.pushbook(a);
l.pushbook(b);
l.pushbook(c);
l.pushbook(d);
l.pushbook(e);
l.update("tandz", "bikipdz", 1);
l.outBook();
