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
    activeStatus() {
        this.status = "active";
    }
    blockStatus() {
        this.status = "block";
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
    addmember(member) {
        if (member != undefined) {
            this.members.push(member);
        }
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
    showMembers() {
        this.members.forEach((e) => {
            if (e.getStatus() == "active")
                console.log(`${e.getId()}____${e.getContact()}____${e.getLendedBooks()}____${e.getName()}____${e.getStatus()}`);
        });
    }
    blockMember(id) {
        this.members.forEach((e) => {
            if (e.getId() == id) {
                e.blockStatus();
            }
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
let members = [
    new Member(1, "Alice", "alice@example.com", "active"),
    new Member(2, "Bob", "bob@example.com", "active"),
    new Member(3, "Charlie", "charlie@example.com", "active"),
    new Member(4, "David", "david@example.com", "active"),
    new Member(5, "Eva", "eva@example.com", "active"),
    new Member(6, "Frank", "frank@example.com", "active"),
    new Member(7, "Grace", "grace@example.com", "active"),
    new Member(8, "Helen", "helen@example.com", "active"),
    new Member(9, "Ian", "ian@example.com", "active"),
    new Member(10, "Jack", "jack@example.com", "active"),
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
Librarys.addmember(members[1]);
Librarys.addmember(members[2]);
Librarys.addmember(members[3]);
Librarys.addmember(members[4]);
Librarys.addmember(members[5]);
Librarys.addmember(members[6]);
Librarys.addmember(members[7]);
Librarys.showMembers();
Librarys.blockMember(1);
