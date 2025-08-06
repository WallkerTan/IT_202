export { }


let check = (str: string) => {
    let temp = new Map();
    let res ="";
    for(let i=0 ; i<str.length; i++){
        if(!temp.has(str[i])){
            temp.set(str[i],true);
            res+=str[i];
        }
    }
    return res;
}
let str1 = "banana";
console.log(str1);
console.log(check(str1));