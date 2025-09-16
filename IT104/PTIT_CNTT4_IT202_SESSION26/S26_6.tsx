import React, {  } from "react";

type user = {
    email: string;
    passWord: string;
    role: "admin" | "user";
};

export const users: user[] = [
    {
        email: "admin@example.com",
        passWord: "123456",
        role: "admin",
    },
    {
        email: "user1@example.com",
        passWord: "user123",
        role: "user",
    },
    {
        email: "user2@example.com",
        passWord: "user456",
        role: "user",
    },
];
console.log(users);
export default function S26_6() {
    return <div>S26_6</div>;
}
