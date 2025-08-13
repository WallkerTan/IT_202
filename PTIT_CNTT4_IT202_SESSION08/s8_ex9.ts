export {};

function flatten<T>(arr: T[]): T[] {
    return arr.reduce((newarr, cur) => {
        if (Array.isArray(cur)) {
            return newarr.concat(flatten(cur as T[]));
        } else {
            return newarr.concat(cur);
        }
        
    }, [] as T[]);
}
console.log(flatten([1, [2, [3, 4], 5], 6]));
