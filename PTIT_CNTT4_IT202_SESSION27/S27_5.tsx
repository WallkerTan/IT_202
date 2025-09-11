import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

type post = {
    id: number;
    title: string;
    content: string;
};

export const ListPosts: post[] = [
    {
        id: 1,
        title: "book",
        content: "hay lắm nhe",
    },
    {
        id: 2,
        title: "book",
        content: "hay lắm nhe",
    },
    {
        id: 3,
        title: "book",
        content: "hay lắm nhe",
    },
    {
        id: 4,
        title: "book",
        content: "hay lắm nhe",
    },
    {
        id: 5,
        title: "book",
        content: "hay lắm nhe",
    },
];

export default function S27_5() {
    const [Page, setPage] = useState(true);
    return (
        <div className="w-full">
            <div className="flex-col justify-between h-full w-[20%] bg-blue-500 absolute left-0 p-4">
                <div>
                    <h2>My blog</h2>
                    <NavLink to={""}>
                        <button className=" text-white w-full text-left p-2 rounded-pill hover:bg-gray-100/20">
                            Post
                        </button>
                    </NavLink>
                </div>
                <div>
                    {" "}
                    <hr />
                    <div>Tan</div>
                </div>
            </div>
            <div className="absolute left-[20%] w-[80%]  bg-red-500 h-full p-2">
                <h2 className="bg-blue-500 text-white text-center">
                    {Page ? "danh sách bài viết" : "chi tiết sản phẩm"}
                </h2>
                <Outlet context={{ Page, setPage }} />
            </div>
        </div>
    );
}
