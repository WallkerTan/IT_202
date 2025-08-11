"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    getBooks() {
        return this.books;
    }
    getMembers() {
        return this.members;
    }
    addbook(book) {
        if (book != undefined) {
            this.books.push(book);
        }
    }
    showAllbook() {
        this.books.forEach((e) => {
            console.log(`${e.getId()}____${e.getAuthor()}____${e.getTitle()}____${e.getStock()}____${e.getStatus()}`);
        });
    }
}
let books = [
    new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "available"),
    new Book(2, "To Kill a Mockingbird", "Harper Lee", 3, "available"),
    new Book(3, "1984", "George Orwell", 4, "available"),
    new Book(4, "Pride and Prejudice", "Jane Austen", 2, "available"),
    new Book(5, "The Catcher in the Rye", "J.D. Salinger", 6, "available"),
    new Book(6, "The Hobbit", "J.R.R. Tolkien", 7, "available"),
    new Book(7, "Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 10, "available"),
    new Book(8, "The Lord of the Rings", "J.R.R. Tolkien", 3, "available"),
    new Book(9, "Animal Farm", "George Orwell", 8, "available"),
    new Book(10, "The Alchemist", "Paulo Coelho", 5, "available"),
];
let Librarys = new Library();
Librarys.addbook(books[0]);
Librarys.addbook(books[1]);
Librarys.addbook(books[2]);
Librarys.addbook(books[3]);
Librarys.addbook(books[4]);
Librarys.addbook(books[5]);
Librarys.addbook(books[6]);
Librarys.addbook(books[7]);
Librarys.showAllbook();
