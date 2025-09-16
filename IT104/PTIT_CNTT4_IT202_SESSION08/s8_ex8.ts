export {};

function partialUpdate<T, U>(obj: T, updates: U) {
    let result: any = { ...obj };
    for (const key in updates) {
        if (key in result) {
            result[key] = (updates as any)[key];
        }
    }
    return result;
}

console.log(
    partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { age: 31 })
);
