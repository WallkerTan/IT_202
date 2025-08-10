export {};

function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num * num);
        } else {
            const letters = input.match(/[a-zA-Z]/g);
            const count = letters ? letters.length : 0;
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

function isPrime(n: number): boolean {
    if (!Number.isInteger(n) || n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}