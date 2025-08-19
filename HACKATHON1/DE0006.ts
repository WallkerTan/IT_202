export {};

import { log } from "console";
import * as readline from "readline";

function Cin<T>(prompt: string, parser: (s: string) => T): Promise<T> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve, reject) => {
        rl.question(prompt, (answer) => {
            rl.close();
            try {
                resolve(parser(answer.trim())); // ép kiểu bằng parser
            } catch (err) {
                reject(err);
            }
        });
    });
}

// khán giả
class Audience {
    static autoId = 1;
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(name: string, email: string, phone: string) {
        this.id = Audience.autoId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): object {
        return {
            id: this.name,
            name: this.name,
            email: this.name,
            phone: this.phone,
        };
    }
}

// phim
abstract class Movie {
    static autoId = 1;
    id: number;
    title: string;
    genre: string;
    ticketPrice: number;
    isShowing: boolean;

    constructor(title: string, genre: string, ticketPrice: number) {
        this.id = Movie.autoId++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = false;
    }

    startShow(): void {
        this.isShowing = true;
    }
    stopShow(): void {
        this.isShowing = false;
    }
    // tính tổng giá vé
    abstract calculateTicketCost(quantity: number): number;
    //ưu đãi dặc biệt
    abstract getSpecialOffers(): string[];
    //mô tả phim
    abstract getMovieInfo(): string;
}

// hành động
class ActionMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return quantity * this.ticketPrice;
    }
    getSpecialOffers(): string[] {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo(): string {
        return "Phim hành động gay cấn, kỹ xảo hoành tráng";
    }
}
//hài nhẹ nhàng
class ComedyMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return quantity * this.ticketPrice;
    }
    getSpecialOffers(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo(): string {
        return "Phim hài nhẹ nhàng, vui nhộn";
    }
}
//hoạt hình
class AnimationMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return quantity * this.ticketPrice;
    }
    getSpecialOffers(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo(): string {
        return "Phim hoạt hình với hình ảnh sống động";
    }
}

// Class TicketBooking
class TicketBooking {
    static autoBookingId = 1;
    bookingId: number;
    audience: Audience;
    movie: Movie;
    quantity: number;
    totalPrice: number;

    constructor(audience: Audience, movie: Movie, quantity: number) {
        this.bookingId = TicketBooking.autoBookingId++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.ticketPrice * this.quantity;
    }

    getDetails(): object {
        return {
            id: this.bookingId,
            name: this.audience.name,
            movie: this.movie,
            quantity: this.quantity,
            totalPrice: this.totalPrice,
        };
    }
}

// Class Cinema
class Cinema {
    movies: Movie[] = [];
    audiences: Audience[] = [];
    bookings: TicketBooking[] = [];

    addMovie(title: string, genre: string, ticketPrice: number): void {
        let temp: Movie;
        if (genre === "Action") {
            temp = new ActionMovie(title, genre, ticketPrice);
        } else if (genre === "Comedy") {
            temp = new ComedyMovie(title, genre, ticketPrice);
        } else if (genre === "Animation") {
            temp = new AnimationMovie(title, genre, ticketPrice);
        }
        this.movies.push(temp);
    }

    addAudience(name: string, email: string, phone: string): void {
        this.audiences.push(new Audience(name, email, phone));
    }

    bookTickets(
        audienceId: number,
        movieId: number,
        quantity: number
    ): TicketBooking | null {
        let member = this.audiences.findIndex((e) => e.id == audienceId);
        if (member == -1) {
            console.log("nguoi nay khong ton tai");
            return null;
        }
        let film = this.movies.findIndex((e) => e.id == movieId);
        if (film == -1) {
            console.log("film nay khong ton tai");
            return null;
        }
        let newticket = new TicketBooking(
            this.audiences[member],
            this.movies[film],
            quantity
        );
        if (this.movies[film].constructor.name === "ComedyMovie") {
            newticket.totalPrice *= 0.9;
        }
        console.log("da them ve moi");
        this.bookings.push(newticket);
        return newticket;
    }

    cancelMovie(movieId: number): void {
        let filmID = this.movies.findIndex((e) => e.id == movieId);
        if (filmID == -1) {
            console.log("khong tim thay film");
            return;
        }
        if (this.movies[filmID].isShowing == false) {
            console.log("phim nay chua dc phat");
            return;
        }
        this.movies[filmID].stopShow();
        console.log("da dung phat");
    }

    listShowingMovies(): void {
        this.movies.forEach((e) => {
            if (e.isShowing == true) {
                console.log(e.getMovieInfo);
            }
        });
    }

    listAudienceBookings(audienceId: number): void {
        this.bookings.forEach((e) => {
            if (e.audience.id == audienceId) {
                console.log(e.audience.getDetails);
            }
        });
    }
    calculateTotalRevenue(): number {
        let t = this.bookings.reduce((sum, cur) => (sum += cur.totalPrice), 0);
        return t;
    }

    getMovieGenreCount(): void {
        let t1, t2, t3;
        this.movies.forEach((e) => {
            if (e.constructor.name == "ActionMovie") {
                t1++;
            } else if (e.constructor.name == "ComedyMovie") {
                t2++;
            } else {
                t3++;
            }
        });
        console.log(`
__ActionMovie: ${t1}
__ComedyMovie: ${t2}
__AnimationMovie: ${t3}`);
    }

    getMovieSpecialOffers(movieId: number): void {
        let t = this.movies.findIndex((e) => e.id == movieId);
        if (t == -1) {
            console.log("khong tim thay film");
            return;
        }
        console.log(this.movies[t].getSpecialOffers());
    }

    findMovieById(movieId: number): Movie | undefined {
        let t = this.movies.findIndex((e) => e.id === movieId);
        if (t == -1) {
            console.log("khong tim thay movie");
            return undefined;
        }
        return this.movies[t];
    }

    findAudienceById(Audienceid: number): Audience | undefined {
        let t = this.audiences.findIndex((e) => e.id === Audienceid);
        if (t == -1) {
            console.log("khong tim thay ng nay");
            return undefined;
        }
        return this.audiences[t];
    }
    findTicketBookingById(ticketid: number): TicketBooking | undefined {
        let t = this.bookings.findIndex((e) => e.bookingId === ticketid);
        if (t == -1) {
            console.log("khong tim thay ve nay");
            return undefined;
        }
        return this.bookings[t];
    }
}

const typemovie = () => {
    console.log(`
chọn loại.
_1: ActionMovie
_2: ComedyMovie
_3: AnimationMovie
_!=: hủy`);
};

const menu = () => {
    console.log(`
===============================================================================
1: Thêm khán giả mới. (10đ)                                                    |
2: Thêm phim mới (chọn loại: ActionMovie, ComedyMovie, AnimationMovie). (10đ)  |
3: Đặt vé (chọn khán giả, chọn phim, nhập số lượng vé). (10đ)                  |
4: Ngừng chiếu phim. (10đ)                                                     |
5: Hiển thị danh sách phim đang chiếu (filter). (10đ)                          |
6: Hiển thị các đặt vé của một khán giả (filter). (10đ)                        |
7: Tính và hiển thị tổng doanh thu (reduce). (10đ)                             |
8: Đếm số lượng từng thể loại phim (reduce hoặc map). (10đ)                    |
9: Tìm kiếm và hiển thị thông tin bằng mã định danh (generic). (10đ)           |
===============================================================================
`);
};

let cinemaTAN = new Cinema();

// Ví dụ dùng
async function main() {
    menu();
    let choice = await Cin("lựa chọn: ---> ", (s) => Number(s));
    switch (choice) {
        case 1:
            let name = await Cin("nhap ten: ", (s) => s);
            let email = await Cin("nhap email: ", (s) => s);
            let phone = await Cin("nhap phone: ", (s) => s);
            cinemaTAN.addAudience(name, email, phone);
            main();
            break;
        case 2: // Thêm phim mới
            typemovie();
            let typeChoice = await Cin("Chọn loại phim: ", (s) => Number(s));
            if (![1, 2, 3].includes(typeChoice)) break;

            let title = await Cin("Nhập tên phim: ", (s) => s);
            let price = await Cin("Nhập giá vé: ", (s) => Number(s));

            let typeStr =
                typeChoice === 1
                    ? "Action"
                    : typeChoice === 2
                    ? "Comedy"
                    : "Animation";
            cinemaTAN.addMovie(title, typeStr, price);
            console.log("Đã thêm phim mới!");
            main();
            break;
        case 3: // Đặt vé
            let audienceId = await Cin("Nhập ID khán giả: ", (s) => Number(s));
            let movieId = await Cin("Nhập ID phim: ", (s) => Number(s));
            let quantity = await Cin("Nhập số lượng vé: ", (s) => Number(s));
            let ticket = cinemaTAN.bookTickets(audienceId, movieId, quantity);
            if (ticket) console.log("Chi tiết vé:", ticket.getDetails());
            main();
            break;
        case 4: // Ngừng chiếu phim
            let stopMovieId = await Cin("Nhập ID phim cần ngừng chiếu: ", (s) =>
                Number(s)
            );
            cinemaTAN.cancelMovie(stopMovieId);
            main();
            break;
        case 5: // Hiển thị danh sách phim đang chiếu
            console.log("Danh sách phim đang chiếu:");
            cinemaTAN.movies.forEach((m) => {
                if (m.isShowing)
                    console.log(`${m.id}: ${m.title} (${m.getMovieInfo()})`);
            });
            main();
            break;
        case 6: // Hiển thị các đặt vé của một khán giả
            let audId = await Cin("Nhập ID khán giả: ", (s) => Number(s));
            console.log("Các đặt vé của khán giả:");
            cinemaTAN.bookings.forEach((b) => {
                if (b.audience.id === audId)
                    console.log(
                        `${b.bookingId}: ${b.movie.title} x${b.quantity}, tổng tiền ${b.totalPrice}`
                    );
            });
            main();
            break;
        case 7: // Tính tổng doanh thu
            console.log("Tổng doanh thu:", cinemaTAN.calculateTotalRevenue());
            main();
            break;
        case 8: // Đếm số lượng từng thể loại phim
            cinemaTAN.getMovieGenreCount();
            main();
            break;
        case 9: // Tìm kiếm thông tin theo ID
            let searchType = await Cin(
                "Tìm kiếm 1: Phim, 2: Khán giả, 3: Vé: ",
                (s) => Number(s)
            );
            let searchId = await Cin("Nhập ID: ", (s) => Number(s));
            if (searchType === 1) {
                let movie = cinemaTAN.findMovieById(searchId);
                if (movie) console.log(movie.getMovieInfo());
            } else if (searchType === 2) {
                let audience = cinemaTAN.findAudienceById(searchId);
                if (audience) console.log(audience.getDetails());
            } else if (searchType === 3) {
                let ticket = cinemaTAN.findTicketBookingById(searchId);
                if (ticket) console.log(ticket.getDetails());
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
            main();
            break;
        case 0:
            process.exit();
        default:
            console.log("lựa chọn không hợp lệ");
            main();
            break;
    }
}

main();
