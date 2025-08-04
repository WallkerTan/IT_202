let where = (a, b) => {
    return a.includes(b);
}

if (where([1, 2, 3, 4, 5], 6)) {
    console.log("true");
} else {
    console.log("false");
}