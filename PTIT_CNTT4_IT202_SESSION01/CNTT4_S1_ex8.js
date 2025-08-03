let fusion = (a, b, c) => {
    if (a.length >= c && c >= 0) {
        let d = [...a.slice(0, c), ...b, ...a.slice(c)];
        console.log(d);
    } else {
        console.log("khong hop le");
    }
};
fusion([1, 2, 3, 4], [5, 6, 7, 8], 2);
