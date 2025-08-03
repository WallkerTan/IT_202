class User {
    constructor(name, age, role) {
        (this.name = name), (this.age = age), (this.role = role);
    }
}
const creatUsed = (name = "noName", age = 18, role = "used") => {
    const ad = new User(name, age, role);
    console.log(ad);
};
for (let i = 0; i < 5; i++) {
    creatUsed("tan",17.9,"admin");
}
