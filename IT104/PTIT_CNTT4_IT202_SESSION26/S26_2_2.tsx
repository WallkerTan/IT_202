import React from "react";
import { student } from "./S26_2";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function S26_2_2() {
    const { name } = useParams();
    const navigate = useNavigate();
    const temp = student.find((e) => e.name === name);
    return (
        <div className=" p-2 rounded-2xl bg-gray-400/50">
            <div>{temp?.id}</div>
            <div>{temp?.name}</div>
            <Button className="rounded-pill py-2" onClick={() => navigate(-1)}>
                Thoát
            </Button>
        </div>
    );
}
