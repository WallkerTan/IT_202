let tanvidai = (arr) => {
    let ode = new Map();
    arr.forEach((e) => {
        let key = e.split("").sort().join("");
        if (!ode.has(key)) {
            ode.set(key, []);
        }
        ode.get(key).push(e);
    });
    return ode;
};

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(tanvidai(arr));
