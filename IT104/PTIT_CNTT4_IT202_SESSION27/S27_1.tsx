import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function S27_1() {
    return (
        <div className="w-full">
            <header className="w-full flex justify-around items-center bg-blue-500 h-10">
                <NavLink to={"./home"} className="text-white">
                    Home
                </NavLink>
                <NavLink to={"./about"} className="text-white">
                    About
                </NavLink>
                <NavLink to={"./contact"} className="text-white">
                    Contact
                </NavLink>
            </header>
            <main className="flex justify-center items-center h-[76vh]">
                <Outlet />
            </main>
        </div>
    );
}
