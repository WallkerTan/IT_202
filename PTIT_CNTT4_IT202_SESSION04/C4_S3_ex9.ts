export {};

type Product = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
    note?: string; 
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    deliveryAddress: string;
    isPaid: boolean;
};

type Invoice = {
    invoiceId: string;
    orders: Order[];
    createdAt: Date;
};

//dánh sách hóa đơn
let lishOder: Invoice = {
    invoiceId: "hh123",
    orders: [],
    createdAt: new Date(),
};

//thêm 1 đơn hàng
let addOder = (used: Order) => {
    lishOder.orders.push(used);
};

let buyproduct = (
    id: string,
    name: string,
    price: number,
    quantity: number,
    used: Order
) => {
    let temp: OrderItem = {
        product: {
            id: id,
            name: name,
            price: price,
        },
        quantity: quantity,
    };
    used.items.push(temp);
};

let showBilld = (used: Order) => {
    let t = 0;
    console.log(`
        Đơn hàng: ${used.orderId}
        Khách hàng: ${used.customerName}
        Sản phẩm:`);
    const Z = used.items.map((e) => {
        let line = `${e.product.name} X ${e.quantity} -> ${
            e.product.price * e.quantity
        }`;
        t += e.product.price * e.quantity;
        return line;
    });

    console.log(Z);
    return t;
};

let money = (lishOder: Invoice) => {
    console.log(`ma: ${lishOder.invoiceId} -> ${lishOder.createdAt}`);
    console.log("--------------------------------------------------");
    let t = 0;
    lishOder.orders.forEach((e) => {
        t += showBilld(e);
    });
    console.log(`thanhf tiền: ${t}`);
};

let donHang1: Order = {
    orderId: "order001",
    customerName: "Nguyen Van A",
    items: [],
    deliveryAddress: "123 Le Loi, Q1, TP.HCM",
    isPaid: true,
};

buyproduct("sp01", "Áo thun", 200000, 2, donHang1);

buyproduct("sp02", "Quần jeans", 500000, 1, donHang1);
buyproduct("sp03", "Giày thể thao", 800000, 1, donHang1);

addOder(donHang1);

money(lishOder);
