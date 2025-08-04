let listproduct = [
    {
        name: "A",
        prince: 100,
        discount: 0.1,
        quantity: 2,
        builkdiscount: {
            minQuantity: 1,
            extraDiscount: 0.1,
        },
    },
    {
        name: "B",
        prince: 200,
        discount: 0.1,
        quantity: 2,
        builkdiscount: {
            minQuantity: 1,
            extraDiscount: 0.1,
        },
    },
    {
        name: "C",
        prince: 600,
        discount: 0.1,
        quantity: 2,
        builkdiscount: {
            minQuantity: 1,
            extraDiscount: 0.1,
        },
    },
    {
        name: "D",
        prince: 400,
        discount: 0.1,
        quantity: 2,
        builkdiscount: {
            minQuantity: 1,
            extraDiscount: 0.1,
        },
    },
    {
        name: "E",
        prince: 50,
        discount: 0.1,
        quantity: 2,
        builkdiscount: {
            minQuantity: 1,
            extraDiscount: 0.1,
        },
    },
];

//tính số tiền dc giảm thứ 2
let neft = (str) => {
    let { builkdiscount } = str;
    if (str.quantity < builkdiscount.minQuantity) {
        return 0;
    }
    let t = str.prince * str.quantity * builkdiscount.extraDiscount;
    return t;
};

let buy = (arr) => {
    let ends = {
        totalBeforeDiscount: 0,
        totalAfterDiscount: 0,
        details: [],
    };
    let befor = 0;
    let after = 0;
    arr.forEach((str) => {
        let temp = {
            name: "",
            finalPrice: 0,
            quantity: 0,
            subtotal: 0,
        };
        temp.name = str.name;
        temp.finalPrice = str.prince * (1 - str.discount);
        temp.quantity = str.quantity;
        temp.subtotal = temp.finalPrice * temp.quantity;
        ends.details.push(temp);
        befor += str.prince * str.quantity;
        after += str.prince * str.quantity * (1 - str.discount) - neft(str);
    });
    ends.totalBeforeDiscount = befor;
    ends.totalAfterDiscount = after;
    console.log(ends);
};
buy(listproduct);
