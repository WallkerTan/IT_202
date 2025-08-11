"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class book {
    constructor(title, author) {
        this.author = author;
        this.title = title;
    }
    gettitle() {
        console.log(this.title);
    }
    getauthor() {
        console.log(this.author);
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
        });
    }
}
const a = new book("tan", "tan5");
const b = new book("tan2", "tan4");
const c = new book("tan3", "tan3");
const d = new book("tan4", "tan2");
const e = new book("tan5", "tan1");
const l = new Library();
l.pushbook(a);
l.pushbook(b);
l.pushbook(c);
l.pushbook(d);
l.pushbook(e);
l.outBook();
