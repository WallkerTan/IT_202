import React from "react";
import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

export default function S26_8() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[85vh] flex-col">
            <div className="flex gap-[20px]">
                <Button onClick={() => navigate("./contact")}>Contact</Button>
                <Button onClick={() => navigate("/S26_8")}>About</Button>
                <Button>Post</Button>
            </div>
            <hr className="w-full" />
            <Outlet />
        </div>
    );
}
