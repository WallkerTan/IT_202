import React, { useEffect } from "react";
import { Pagination } from "antd";

// State quản lý phân trang
type PaginationState = {
    current?: number;
    pageSize?: number;
    total: number;
};

type PostType = {
    id: number;
    title: string;
    content: string;
};

export default function PostPagination({
    Posts,
    PaginationItem,
    PagiDispatch,
}: {
    Posts: PostType[];
    PaginationItem: PaginationState;
    PagiDispatch: (action: {
        type: "RESET" | "SET_PAGE" | "SET_PAGE_SIZE";
        payload?: number;
    }) => void;
}) {
    useEffect(() => {}, [Posts]);
    return (
        <div className="bg-white/20 rounded-2xl absolute right-[40px] top-[180px]">
            <Pagination
                simple={{ readOnly: true }}
                current={PaginationItem.current} // Trang mặc định
                total={Posts.length} // Tổng số phần tử
                pageSize={PaginationItem.pageSize} // Số phần tử trên 1 trang
                showSizeChanger={false}
                onChange={(page) => {
                    if (page > PaginationItem.current!) {
                        console.log("Next page");
                    } else {
                        console.log("Previous page");
                    }
                    PagiDispatch({ type: "SET_PAGE", payload: page });
                }}
            />
        </div>
    );
}
