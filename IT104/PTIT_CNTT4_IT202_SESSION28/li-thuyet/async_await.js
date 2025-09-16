function getdataApi1() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Api1");
            res();
        }, 1000);
    });
}

function getdataApi2() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Api2");
            res();
        }, 1000);
    });
}

function getdataApi3() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Api3");
            res();
        }, 1000);
    });
}

async function runA() {
    try {
        await getdataApi1();
        await getdataApi2();
        await getdataApi3();
    } catch (errol) {
        console.log("bug", errol);
    }
}
runA();
