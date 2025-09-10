import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type t = {
    id: number;
    name: string;
};

export const student: t[] = [
    { id: 1, name: "tan" },
    { id: 2, name: "huyen" },
    { id: 3, name: "ngoc" },
    { id: 4, name: "yen" },
    { id: 5, name: "phuong" },
];
export default function S26_2() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around w-full">
            {student.map((e) => (
                <div
                    key={e.id}
                    className="rounded-2xl bg-gray-500/50 p-4 flex-col"
                >
                    <div>{e.id}</div>
                    <div>{e.name}</div>
                    <Button
                        className="rounded-pill py-2"
                        onClick={() => navigate(`./${e.name}`)}
                    >
                        Lấy giá trị
                    </Button>
                </div>
            ))}
        </div>
    );
}
