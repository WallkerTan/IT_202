import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../../App.css";
export default function S27_6() {
    const [text, setText] = useState<string>();
    const handalClick = (str: string) => {
        setText(str);
    };
    return (
        <div>
            <div>
                <NavLink to={"/S27_6"} onClick={() => handalClick("home")}>
                    home
                </NavLink>
                <NavLink to={"/S27_6"} onClick={() => handalClick("products")}>
                    products
                </NavLink>
                <NavLink to={"/S27_6"} onClick={() => handalClick("deltal")}>
                    deltal
                </NavLink>
            </div>
            <div>{text}</div>
        </div>
    );
}
