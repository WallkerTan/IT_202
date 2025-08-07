export {}

type persion = {
    name: string,
    age: number
};

type Employee = {
    employeeId: string,
    department: string
} & persion; 

const tan = {
    name: "tan",
    age: 18,
    employeeId: "12345ABC",
    department: "phòng kế toán"
};
console.log(tan);
