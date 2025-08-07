type Product = {
    id: string;
    name: string;
    price: number;
    category: string; // id vô dụng ko dc việc nên thầy bỏ
    discount?: number;
};

const products: Product[] = [
    {
        id: "p001",
        name: "Laptop",
        price: 1500,
        category: "Electronics",
        discount: 200,
    },
    {
        id: "p002",
        name: "Smartphone",
        price: 800,
        category: "Electronics",
    },
    {
        id: "p003",
        name: "Office Chair",
        price: 300,
        category: "Furniture",
        discount: 50,
    },
    {
        id: "p004",
        name: "Desk Lamp",
        price: 60,
        category: "Furniture",
    },
    {
        id: "p005",
        name: "Running Shoes",
        price: 120,
        category: "Sportswear",
        discount: 20,
    },
];

let isprice = (e: Product) => {
    return e.discount ? (e.price * e.discount) / 100 : e.price;
};

let theprice = (arr: Product[]) => {
    let t = arr.reduce((a, c) => {
        return (a += isprice(c));
    }, 0);
    console.log(`thành tiền: ${t} vnd`);
};
theprice(products);

let showinfo = (s: Product) => {
    let t = s.discount ? (s.price * s.discount) / 100 : s.price;
    console.log(`Ten: ${s.name}
        Gia goc: ${s.price}
        Gia khuyen mai: ${t}
        Danh muc: ${s.category}`);
};

let showALL = (a: Product[]) => {
    a.forEach((e) => {
        showinfo(e);
    });
};
showALL(products);
