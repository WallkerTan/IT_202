export {};

function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((newarr, cur) => newarr.concat(cur), [] as T[]);
}
const arr = [[1, 2], [3, 4], [5]];
const flattened = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened);
