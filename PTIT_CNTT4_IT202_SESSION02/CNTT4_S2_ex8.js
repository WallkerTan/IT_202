const person = {
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country: "Vietnam",
    },
    contact: {
        email: "john@example.com",
        phone: "0123456789",
    },
    job: {
        title: "Developer",
        company: "Tech Corp",
    },
};

let displayUserInfo = (o) => {
    console.log(`name: ${o.name !== null ? o.name : "undifine"}`);
    console.log(`age: ${o.age !== null ? o.age : "undifine"}`);
    console.log(
        `live: ${o.location.city !== null ? o.location.city : "undifine"}`
    );
    console.log(
        `in: ${o.location.country !== null ? o.location.country : "undifine"}`
    );
    console.log(
        `email: ${o.contact.email !== null ? o.contact.email : "undifine"}`
    );
    console.log(
        `phone: ${o.contact.phone !== null ? o.contact.phone : "undifine"}`
    );
    console.log(
        `job->title: ${o.job.title !== null ? o.job.title : "undifine"}`
    );
    console.log(
        `job->company: ${o.job.company !== null ? o.job.company : "undifine"}`
    );
};
displayUserInfo(person);
