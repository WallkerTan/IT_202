export {};

class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;

    constructor(
        id: number,
        title: string,
        author: string,
        stock: number,
        status: string
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getStock(): number {
        return this.stock;
    }

    getStatus(): string {
        return this.status;
    }
}

class LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    getMemberId(): number {
        return this.memberId;
    }

    getBookId(): number {
        return this.bookId;
    }

    getDueDate(): Date {
        return this.dueDate;
    }
}

class Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[];
    private status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getContact(): string {
        return this.contact;
    }

    getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }

    getStatus(): string {
        return this.status;
    }
}

class Library {
    private books: Book[];
    private members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    getBooks(): Book[] {
        return this.books;
    }

    getMembers(): Member[] {
        return this.members;
    }

    addbook(book: Book) {
        if (book != undefined) {
            this.books.push(book);
        }
    }

    showAllbook() {
        this.books.forEach((e) => {
            console.log(
                `${e.getId()}____${e.getAuthor()}____${e.getTitle()}____${e.getStock()}____${e.getStatus()}`
            );
        });
    }
}

let books: Book[] = [
    new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "available"),
    new Book(2, "To Kill a Mockingbird", "Harper Lee", 3, "available"),
    new Book(3, "1984", "George Orwell", 4, "available"),
    new Book(4, "Pride and Prejudice", "Jane Austen", 2, "available"),
    new Book(5, "The Catcher in the Rye", "J.D. Salinger", 6, "available"),
    new Book(6, "The Hobbit", "J.R.R. Tolkien", 7, "available"),
    new Book(
        7,
        "Harry Potter and the Sorcerer's Stone",
        "J.K. Rowling",
        10,
        "available"
    ),
    new Book(8, "The Lord of the Rings", "J.R.R. Tolkien", 3, "available"),
    new Book(9, "Animal Farm", "George Orwell", 8, "available"),
    new Book(10, "The Alchemist", "Paulo Coelho", 5, "available"),
];
let Librarys: Library = new Library();
Librarys.addbook(books[0]);
Librarys.addbook(books[1]);
Librarys.addbook(books[2]);
Librarys.addbook(books[3]);
Librarys.addbook(books[4]);
Librarys.addbook(books[5]);
Librarys.addbook(books[6]);
Librarys.addbook(books[7]);
Librarys.showAllbook();
