"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tan = {
    orderId: "22-01-2006",
    customerName: "tan",
    items: [],
    note: "thandongvodichvutru",
};
let buyproduct = (id, name, price, quantity, used) => {
    let temp = {
        product: {
            id: id,
            name: name,
            price: price,
        },
        quantity: quantity,
    };
    used.items.push(temp);
};
let showBilld = (used) => {
    console.log(`
        Đơn hàng: ${used.orderId}
        Khách hàng: ${used.customerName}
        Sản phẩm:`);
    const Z = used.items.map((e) => `${e.product.name} X ${e.quantity} -> ${e.product.price * e.quantity}`);
    console.log(Z);
};
buyproduct("1", "ca1", 1000, 2, tan);
buyproduct("2", "ca2", 1000, 2, tan);
buyproduct("3", "ca3", 1000, 2, tan);
buyproduct("4", "ca4", 1000, 2, tan);
buyproduct("5", "ca5", 1000, 2, tan);
showBilld(tan);
