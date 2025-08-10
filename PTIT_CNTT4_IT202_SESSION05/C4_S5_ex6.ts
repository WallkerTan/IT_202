export {};
type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; // optional
};

const listProduct: Product[] = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        discount: 20, // 20%
        category: {
            id: "C001",
            name: "Thời trang nam",
        },
    },
    {
        id: "P002",
        name: "Giày thể thao",
        price: 800000,
        category: {
            id: "C002",
            name: "Giày dép",
        },
    },
    {
        id: "P003",
        name: "Túi xách nữ",
        price: 500000,
        discount: 10, // 10%
        category: {
            id: "C003",
            name: "Phụ kiện",
        },
    },
];

function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}

function printProductInfo(product: Product): void {
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);

    if (product.discount) {
        const finalPrice = getFinalPrice(product);
        console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
    }

    console.log(`Danh mục: ${product.category.name}`);
    console.log("------------");
}

listProduct.forEach(printProductInfo);

