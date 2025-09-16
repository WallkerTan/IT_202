// const askPhoneNumber = (callback) => {
//     console.log("ánh gọi cho huy ");
//     console.log("đợi mình tí");
//     let t;
//     setTimeout(() => {
//         console.log("tìm thấy số rồi");
//         t = 12345;
//         callback(t);
//     }, 0);
//     console.log("gọi theo số" + t);
// };
// function haha(sdt) {
//     console.log("gọi được số" + sdt);
// }
// askPhoneNumber(haha);

// ví dụ calback hell

function getdata(calback) {
    setTimeout(() => {
        console.log("lấy 1");
        calback();
    }, 1000);
}
function get1(calback) {
    setTimeout(() => {
        console.log("lấy 2");
        calback();
    }, 1000);
}
function get2(calback) {
    setTimeout(() => {
        console.log("lấy 3");
        calback();
    }, 1000);
}
function get3() {
    setTimeout(() => {
        console.log("lấy 4");
    }, 1000);
}

function t() {
    getdata(() => get1(() => get2(() => get3)));
}
t();
