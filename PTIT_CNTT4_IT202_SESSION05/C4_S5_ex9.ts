export {};

class book {
    private title: string;
    private author: string;
    private id: number;
    constructor(title: string, author: string, id: number) {
        this.author = author;
        this.title = title;
        this.id = id;
    }

    settitle(title: string) {
        this.title = title;
    }

    setauthor(author: string) {
        this.author = author;
    }

    gettitle(): string {
        return this.title;
    }
    getauthor(): string {
        return this.author;
    }
    getid(): number {
        return this.id;
    }
}

class Library {
    listBook: book[] = [];
    pushbook(b: book) {
        this.listBook.push(b);
    }
    outBook() {
        this.listBook.forEach((e) => {
            console.log(e.gettitle(), e.getauthor());
        });
    }

    update(title: string, author: string, id: number) {
        this.listBook.forEach((e) => {
            if (e.getid() == id) {
                e.settitle(title);
                e.setauthor(author);
            }
        });
    }

    search(name: string) {
        this.listBook.forEach((e) => {
            if (e.gettitle().includes(name)) {
                console.log(e.gettitle(), e.getauthor());
            }
        });
    }

    delebook(id: number) {
        let t = this.listBook.findIndex((e) => e.getid() == id);
        if (t != -1) {
            this.listBook = [
                ...this.listBook.slice(0, t),
                ...this.listBook.slice(t + 1),
            ];
        } else {
            console.log("khong tim thay");
        }
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
l.delebook(1);
l.outBook();
