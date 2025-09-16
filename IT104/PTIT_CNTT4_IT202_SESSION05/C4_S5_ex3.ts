export {};

/*
Tóm tắt khác biệt:

| Đặc điểm                        | Abstract Method | Method Thông Thường |
|----------------------------------|-----------------|----------------------|
| Có body hay không                | Không           | Có                   |
| Ghi đè bắt buộc                  | Có              | Không bắt buộc       |
| Khai báo trong lớp abstract      | Có              | Không cần            |
| Có thể gọi trực tiếp từ lớp cha  | Không           | Có                   |
*/

abstract class job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }

    //methout thông thường
    printftype() {
        console.log(this.type);
    }

    abstract calculateSalary(): number;
}

class PartTimeJob extends job {
    private workingHour: number;
    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }

    //abstract bắt buộc phải định nghĩa lại phương thức calculateSalary
    calculateSalary(): number {
        return this.workingHour * 30000;
    }
}

const a = new PartTimeJob("haha", 1000);
a.printftype();
console.log(a.calculateSalary());

