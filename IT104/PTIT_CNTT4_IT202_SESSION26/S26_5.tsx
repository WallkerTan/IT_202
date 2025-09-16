import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function S26_5() {
    const Wtf = true;
    const navigate = useNavigate();
    useEffect(() => {
        if (Wtf) {
            navigate("/login");
        } else {
            navigate("/account");
        }
    }, [Wtf, navigate]);
    return <div></div>;
}
