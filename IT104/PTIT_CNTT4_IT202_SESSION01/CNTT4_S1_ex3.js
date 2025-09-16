let student = [
    { name: "tan1", id: 1 },
    { name: "tan2", id: 2 },
    { name: "tan3", id: 3 },
];

student.forEach((e) => {
    let { name, id } = e;
    console.log(`xin chao anh ${name} nhe , id cua anh la ${id}`);
});
