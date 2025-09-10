import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type t = {
    id: number;
};

export const A: t[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
export default function S26_1() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around w-full">
            {A.map((e) => (
                <div
                    key={e.id}
                    className="rounded-2xl bg-gray-500/50 p-4 flex-col"
                >
                    <div>{e.id}</div>
                    <Button className="rounded-pill py-2" onClick={()=>navigate(`./${e.id}`)}>Lấy giá trị</Button>
                </div>
            ))}
        </div>
    );
}
