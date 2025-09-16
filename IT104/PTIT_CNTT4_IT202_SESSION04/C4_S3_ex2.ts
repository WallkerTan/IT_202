let arr: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];

let averageScore = (arr: number[]) => {
    let t = arr.reduce((temp, cur) => (temp += cur), 0);
    console.log((t / arr.length).toFixed(2));
};
averageScore(arr);
