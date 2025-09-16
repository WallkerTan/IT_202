let theclass = [
    {
        name: "Alice",
        age: 20,
        listMonhoc: [
            { subject: "Math", score: 8 },
            { subject: "English", score: 7 },
            { subject: "Physics", score: 6.5 },
            { subject: "Literature", score: 7.5 },
        ],
    },
    {
        name: "Bob",
        age: 22,
        listMonhoc: [
            { subject: "Math", score: 6 },
            { subject: "English", score: 8.5 },
            { subject: "Physics", score: 9 },
            { subject: "Literature", score: 5.5 },
        ],
    },
    {
        name: "Charlie",
        age: 21,
        listMonhoc: [
            { subject: "Math", score: 9.5 },
            { subject: "English", score: 6 },
            { subject: "Physics", score: 7 },
            { subject: "Literature", score: 8 },
        ],
    },
    {
        name: "Diana",
        age: 23,
        listMonhoc: [
            { subject: "Math", score: 7 },
            { subject: "English", score: 9 },
            { subject: "Physics", score: 6 },
            { subject: "Literature", score: 9.5 },
        ],
    },
    {
        name: "Ethan",
        age: 24,
        listMonhoc: [
            { subject: "Math", score: 5.5 },
            { subject: "English", score: 6.5 },
            { subject: "Physics", score: 7.5 },
            { subject: "Literature", score: 8 },
        ],
    },
];

//hàm tienhs điểm trung bình , xếp loại
let Average = (str) => {
    let { listMonhoc } = str;
    let Avg = listMonhoc.reduce((sum, cur) => {
        return sum + cur.score;
    }, 0);
    Avg = Avg / 4;
    if (Avg < 5) {
        console.log(`Average score: ${Avg} -> hs yếu`);
    } else if (Avg >= 8.5) {
        console.log(`Average score: ${Avg} -> hs giỏi`);
    } else if (Avg >= 7) {
        console.log(`Average score: ${Avg} -> hs khá`);
    } else if (Avg >= 5) {
        console.log(`Average score: ${Avg} -> hs trung binh`);
    }
};

let bestAndbet = (str) => {
    let { listMonhoc } = str;
    let max = {
            n: "",
            sc: 0,
        },
        min = {
            n: "",
            sc: 10,
        };
    listMonhoc.forEach((e) => {
        if (e.score > max.sc) {
            max.sc = e.score;
            max.n = e.subject;
        } else if (e.score < min.sc) {
            min.sc = e.score;
            min.n = e.subject;
        }
    });
    console.log(`best subject: ${max.n} -> ${max.sc}`);
    console.log(`bet subject: ${min.n} -> ${min.sc}`);
};

let evaluate = (arr) => {
    arr.forEach((str) => {
        console.log(`name: ${str.name}`);
        console.log(`age: ${str.age}`);
        Average(str);
        bestAndbet(str);
    });
};

evaluate(theclass);
