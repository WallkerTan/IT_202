let phoneBooks = [
    {
        name: "tan",
        phone: "0000000000",
        email: "tan@depzai1.com",
    },
    {
        name: "tan2",
        phone: "0000000001",
        email: "tan@depzai2.com",
    },
    {
        name: "tan3",
        phone: "0000000002",
        email: "tan@depzai3.com",
    },
    {
        name: "tan4",
        phone: "0000000003",
        email: "tan@depzai4.com",
    },
    {
        name: "tan5",
        phone: "0000000004",
        email: "tan@depzai5.com",
    },
];
let addContact = (name, phone, email) => {
    let a = {
        name: name,
        phone: phone,
        email: email,
    };
    phoneBooks.push(a);
};
let displayContact = (a) => {
    a.forEach((str) => {
        console.log(`${str.name} ${str.phone} ${str.email}`);
    });
};
addContact("ngochuyen,099999999,huyen@gamil.com");
displayContact(phoneBooks);
