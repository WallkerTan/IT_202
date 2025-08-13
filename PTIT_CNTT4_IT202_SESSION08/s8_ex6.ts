export {};

function findElement<T>(array: T[], taget: T) {
    for (const e of array) {
        if (e == taget) {
            console.log(e);
            return;
        }
    }
    console.log("undifine");
}

findElement([1, 2, 3, 4, 5, 6], 5);
