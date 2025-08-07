export {};

interface student {
    name: string;
    age: number;
}

interface st2 {
    email: string;
}

interface student extends st2 {}

const stds: student = {
    name: "tan",
    age: 18,
    email: "tandzvaicatrong",
};

let show = (std: student): void => {
    console.log(`${std.name}  ${std.age}  ${std.email}`);
};

show(stds);
