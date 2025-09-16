import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
type Member = {
    id: number;
    name: string;
    age: number;
};

export const members: Member[] = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Tran Thi B", age: 22 },
    { id: 3, name: "Le Van C", age: 19 },
    { id: 4, name: "Pham Thi D", age: 21 },
    { id: 5, name: "Hoang Van E", age: 23 },
];
export default function S26_7() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/S26_7_2");
    });
    return <div>S26_7</div>;
}
