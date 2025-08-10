export {};

let Student: { name: string; age: number; email: string }[] = [
    { name: "Nguyen Van A", age: 20, email: "" },
];

console.log(
    `tên tôi là ${Student[0].name}, tôi ${Student[0].age} tuổi và email của tôi là ${Student[0].email}`
);
