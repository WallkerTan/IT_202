const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("nhap mot gia tri: ", (num) => {
    if (!isNaN(num)) {
        num = Number(num);
        if (num % 2 === 0) console.log(`${num} la so chan`);
        else console.log(`${num} la so le`);
    } else {
        console.log("khong phai so");
    }
    rl.close();
});
