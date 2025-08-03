const { log } = require("node:console");

const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
let {
    data: { id },
    data: { title },
    data: {
        author: { name },
        author: { email },
    },
} = response;
console.log(`
    ${id}
    ${title}
    ${name}
    ${email}`);
