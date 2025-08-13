export {};

function getlength<T>(str: T) {
    let arr = [];
    let maxl = [];
    if (typeof str == "string") {
        arr = str.split(" ");
        arr.forEach((e) => {
            let temp = e.split("");
            if ([...new Set(temp)].length > maxl.length) {
                maxl = [...new Set(temp)];
            }
        });
    } else if (Array.isArray(str)) {
        str.forEach((e) => {
            let temp = e.split("");
            if ([...new Set(temp)].length > maxl.length) {
                maxl = [...new Set(temp)];
            }
        });
    }
    console.log(maxl.join(""));
}

getlength("hello world apple banana orange pumpkin cucumber");