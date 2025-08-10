export {};
let students: string[] = [
    "Nguyen Van A",
    "Nguyen Van B",
    "Nguyen Van C",
    "Nguyen Van D",
    "Nguyen Van E",
];

console.log("Danh sách sinh viên:");
for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}
