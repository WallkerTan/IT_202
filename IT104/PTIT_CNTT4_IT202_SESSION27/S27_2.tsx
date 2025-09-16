import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function S27_2() {
    const [pagePr, setPage] = useState<boolean>(false);
    useEffect(() => {}, [pagePr]);
    return (
        <div className="w-full">
            <header className="flex-col justify-center w-full text-white bg-blue-500">
                <h2>Thông tin giỏ hàng</h2>
                <div>{pagePr ? "danh sách sản phẩm" : "chi tiết sản phẩm"}</div>
            </header>
            <main>
                <Outlet context={{ pagePr, setPage }} />
            </main>
        </div>
    );
}
