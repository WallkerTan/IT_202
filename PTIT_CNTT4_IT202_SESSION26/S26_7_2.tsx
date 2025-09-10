import React from "react";
import { members } from "./S26_7";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function S26_7_2() {
    const navigate = useNavigate();
    const handalClick = (e: number) => {
        const temp = members.find((t) => t.id === e);
        if (!temp) return;

        const cur = encodeURIComponent(JSON.stringify(temp));
        navigate(`/S26_7_3?data=${cur}`);
    };
    return (
        <div className="flex justify-around w-full">
            {members.map((e) => (
                <div className="bg-gray-400/30 p-2 rounded-2xl ">
                    <div>id: {e.id}</div>
                    <div>name: {e.name}</div>
                    <Button onClick={() => handalClick(e.id)}>Chi tiết</Button>
                </div>
            ))}
        </div>
    );
}
