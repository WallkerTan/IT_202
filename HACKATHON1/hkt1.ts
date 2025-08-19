export {};
import { log } from "console";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Used {
    id: number;
    name: string;
    email: string;
    phone: string;
    purchasedCourses: Course[];
    constructor(
        id: number,
        name: string,
        email: string,
        phone: string,
        purchasedCourses: Course[]
    ) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.purchasedCourses = purchasedCourses;
    }
    //phương thức
    getDetails() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            purchasedCourses: this.purchasedCourses,
        };
    }
    buyCourse(Course: Course) {
        let t = this.purchasedCourses.find(
            (e) => e.courseId == Course.courseId
        );
        if (t) {
            console.log("da ton tai");
        } else {
            this.purchasedCourses.push(Course);
        }
    }
}
abstract class Course {
    courseId: number;
    courseName: string;
    price: number;
    duration: number;
    students: number = 0;
    constructor(
        courseId: number,
        courseName: string,
        price: number,
        duration: number
    ) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.duration = duration;
        this.price = price;
    }
    displayCourse() {
        console.log(
            `id:__${this.courseId}
                name:__${this.courseName}   
                price:__${this.price}   
                duration:__${this.duration}   
                students:__${this.students}`
        );
    }
    getCourse(discount?: number) {
        if (discount) {
            this.students += discount;
        } else {
            this.students += 1;
        }
    } //thêm học sinh
    abstract getCertificate(): void; //trả về chứng chỉ khóa học , trừu tượng
    abstract getRefundPolicy(): void; // Trả về chính sách hoàn tiền
}

class FreeCourse extends Course {
    getCertificate(): void {
        console.log("khong co trung chi trong khoa hoc nay");
    }
    getRefundPolicy(): void {
        console.log("khóa học miễn phí");
    }
}
class PaidCourse extends Course {
    getCertificate(): void {
        console.log("ban da nhan chung chi");
    }
    getRefundPolicy(): void {
        console.log("hoan tien nếu time <2h");
    }
}

type Discount = {
    code: string;
    CacheValue: number;
};

class CourseManager {
    courses: Course[] = [];
    users: Used[] = [];
    discounts: Discount[] = [];

    //tạo í lớn nhất +1
    setCourse_id() {
        return this.courses.length == 0
            ? 1
            : this.courses[this.courses.length - 1].courseId + 1;
    }
    // void: Thêm khóa học mới vào danh sách khóa học.
    addCourse(
        type: string,
        courseName: string,
        coursePrice: number,
        courseDuration: number
    ) {
        if (type === "free") {
            const temp = new FreeCourse(
                this.setCourse_id(),
                courseName,
                coursePrice,
                courseDuration
            );
            this.courses.push(temp);
        } else if (type === "Paid") {
            const temp = new PaidCourse(
                this.setCourse_id(),
                courseName,
                coursePrice,
                courseDuration
            );
            this.courses.push(temp);
        }
    }

    //lấy id người dùng lớn nhất cộng 1
    setUsed_id() {
        return this.users.length === 0
            ? 1
            : this.users[this.users.length - 1].id + 1;
    }

    //Thêm người dùng mới vào danh sách người dùng.
    createUser(name: string, email: string, phone: string): void {
        const temp = new Used(this.setUsed_id(), name, email, phone, []);
        this.users.push(temp);
    }

    // Thêm mã giảm giá mới vào danh sách mã giảm giá.
    createNewDiscount(discountCode: string, discountValue: number): void {
        let t: Discount = {
            code: discountCode,
            CacheValue: discountValue,
        };
        this.discounts.push(t);
    }

    // Xử lý yêu cầu mua khóa học của người dùng và trả về thông báo.
    handleBuyCourse(userId: number, courseId: number): string {
        let t = this.users.findIndex((e) => e.id == userId);
        if (t != -1) {
            return "khong tim thay ng dung";
        }
        let z = this.courses.findIndex((e) => e.courseId == courseId);
        if (z != -1) {
            return "ko tim thay khoa hoc";
        }
        this.users[t].buyCourse(this.courses[z]);
        return " da them khóa học";
    }

    //Xử lý yêu cầu hoàn tiền của người dùng và trả về thông báo.
    handleRefundCourse(userId: number, courseId: number): string {
        let t = this.users.findIndex((e) => e.id == userId);
        if (t == -1) {
            return "khong thay";
        }
        let z = this.courses.findIndex((e) => e.courseId == courseId);
        if (z == -1) {
            return "khong co khoa hoc";
        }
        let temp = this.courses[z];
        this.users[t].buyCourse(temp);
        return "da su li yeu cau";
    }

    //Hiển thị toàn bộ danh sách khóa học, có sử dụng lọc theo số lượng người dùng đã mua (Sử dụng map kết hợp filter).
    listCourses(numOfStudents?: number): void {
        let arr = this.courses.filter((e) => e.students == numOfStudents);
        if (arr.length == 0) {
            console.log("khong co khoa hoc nao co" + numOfStudents + "phan tu");
            return;
        }
        arr.forEach((e) => {
            console.log(`id__${e.courseId}
                            name__${e.courseName}
                            price__${e.price}
                            duration__${e.duration}
                            students__${e.students}`);
        });
    }

    //Hiển thị thông tin, các khóa học đã mua và mã giảm giá đang có của người dùng. (Sử dụng find).
    showUserInformation(email: string): void {
        let t = this.users.find((e) => e.email == email);
        if (t) {
            t.purchasedCourses.forEach((e) => {
                e.displayCourse();
            });
        }
    }
    //Tính tổng doanh thu từ các khóa học đã được mua (Sử dụng reduce).
    calculateTotalRevenue(): number {
        let cnt = 0;
        this.users.forEach((e) => {
            cnt += e.purchasedCourses.reduce((all, cur) => {
                return (all += cur.price);
            }, 0);
        });
        return cnt;
    }
    //Tặng mã giảm giá cho một người dùng (Sử dụng find).
    //e ko thấy phần lưu mã giảm giá ở ng dùng , e giữ nguyên cấu trúc.//giảm giá trực tiếp
    giftDiscount(userId: number, discountCode: string): void {
        let t = this.users.findIndex((e) => e.id == userId);
        if (t != -1) {
            let temp = this.discounts.find((e) => e.code == discountCode);
            if (!temp) {
                console.log("ko có mã giảm giá này");
                return;
            }
            this.users[t].purchasedCourses.forEach((e) => {
                e.price * (1 - temp.CacheValue / 100);
            });
        } else {
            console.log("nguoi dung khong ton tại");
            return;
        }
    }

    //Hiển thị toàn bộ chứng chỉ của người dùng (Sử dụng find).
    //e cũng ko thấy phần lưu chứng chỉ, có phần trả về nhưng ko có phân luuw
    getCertificate(userId: string): void {}
    // Hiển thị chính sách hoàn tiền của khoá học (Sử dụng find).
    getRefundPolicy(courseId: number): void {
        let t = this.courses.find((e) => e.courseId == courseId);
        if (!t) {
            console.log("khong hop le");
            return;
        }
        console.log(t.getRefundPolicy());
    }
}

//khóa học tan
const tan = new CourseManager();

//thêm người dùng
tan.createUser("tan", "tan1@gmail.com", "1234567890");
tan.createUser("tan2", "tan1@gmail.com", "1234567890");
tan.createUser("tan3", "tan1@gmail.com", "1234567890");
tan.createUser("tan4", "tan1@gmail.com", "1234567890");

// //thêm khóa học
// tan.addCourse("free", "khoa1", 0, 100);
// tan.addCourse("free", "khoa2", 0, 100);
// tan.addCourse("free", "khoa3", 0, 100);

// //in khóa học theo số lượng ng dăng kí
// //tan.listCourses(0);

// //thêm mã giảm giá
// tan.createNewDiscount("1232", 30);
// tan.createNewDiscount("1234", 30);
// tan.createNewDiscount("1235", 30);

// //thêm hkoas học cho người dùng
// console.log(tan.handleBuyCourse(1, 1));
// console.log(tan.handleBuyCourse(2, 1));
// console.log(tan.handleBuyCourse(3, 1));

// //hoàn tiền
// tan.handleRefundCourse(1, 1);

// //hien thi thong tin ng dung
// tan.users.forEach((e) => console.log(e.getDetails));

// //tong doanh thu
// tan.calculateTotalRevenue();

// //tặng mã giảm giá
// tan.giftDiscount(1,"1232");

// //hiển thị chính sách hoàn tièn
// tan.getRefundPolicy(1);

// //thoát 
// //heheh