function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        // Trường hợp chuỗi chỉ chứa số
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num ** 2); // hoặc: Math.pow(num, 2)
        } else {
            // Tìm chữ cái (bỏ qua số và ký tự đặc biệt)
            const matches = input.match(/[a-zA-Z]/g);
            const count = matches ? matches.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    } else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        } else {
            console.log("Không phải số nguyên tố");
        }
    } else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}

// Hàm kiểm tra số nguyên tố
function isPrime(n: number): boolean {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
processInput("123");      
processInput("abc123!");  
processInput(7);          
processInput(10);         
processInput(true);       
processInput(false);      
