export {};

let temp = (a: string | number) => {
    if (typeof a == "string") {
        console.log(`${a.length} kí tự`);
    } else if (typeof a == "number") {
        console.log(a % 2 == 0 ? "so chan" : "so le");
    } else {
        console.log("vo dinh dang");
    }
};
temp("1");
temp(5);
temp(6);