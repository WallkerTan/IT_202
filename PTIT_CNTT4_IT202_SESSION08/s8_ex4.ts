export {};

function temp<a, b>(one: a, two: b): a & b {
    let result: any = { ...one };
    for (const key in two) {
        if (key in result) {
            console.log(two[key]);
            console.log(two as any);
            
            result[key] = [result[key], (two as any)[key]];
        } else {
            result[key] = (two as any)[key];
        }
    }
    return result;
}

const d: any = { id: 1, name: "Alice" };
const c = { id: 2, age: 25 };

console.log(temp(c,d));
