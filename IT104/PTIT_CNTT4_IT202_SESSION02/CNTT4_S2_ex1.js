let sum = (a) => {
    return a.reduce((sum, cur) => {
        if (cur % 2 === 0) {
            return sum + cur;
        }
        return sum;
    }, 0);
};


console.log(sum([1, 2, 3, 4, 5, 6]));
