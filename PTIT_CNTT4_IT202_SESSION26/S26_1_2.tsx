import React from "react";
import { useNavigate, useParams } from "react-router";
import { A } from "./S26_1";
import { Button } from "react-bootstrap";

export default function S26_1_2() {
    const { id } = useParams();
    const t = A.find((e) => e.id === Number(id));
    const navigate = useNavigate();
    return (
        <div className=" p-2 rounded-2xl bg-gray-400/50">
            <div>{t?.id}</div>
            <Button className="rounded-pill py-2" onClick={() => navigate(-1)}>
                Thoát
            </Button>
        </div>
    );
}
