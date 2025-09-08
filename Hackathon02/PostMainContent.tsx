import React, { useEffect } from "react";
import { Heart } from "lucide-react";
import { CircleUser } from "lucide-react";

type PostType = {
    id: number;
    title: string;
    content: string;
    like: boolean;
};

// State quản lý phân trang
type PaginationState = {
    current?: number;
    pageSize?: number;
    total: number;
};

export default function PostMainContent({
    Posts,
    RenderPost,
    PaginationItem,
    FormDispatch,
    delePost,
    upDatePost,
}: {
    FormDispatch: (action: {
        type: "Add" | "update" | "close";
        payload?: PostType;
    }) => void;
    Posts: PostType[];
    RenderPost: PostType[];
    PaginationItem: PaginationState;
    PagiDispatch: (action: {
        type: "RESET" | "SET_PAGE" | "SET_PAGE_SIZE";
    }) => void;
    delePost: (t: PostType) => void;
    upDatePost: (t: PostType) => void;
}) {
    console.log(Posts.length);
    useEffect(() => {}, [PaginationItem]);
    return (
        <div
            className="p-4 w-[90%] h-[270px] rounded-2xl  m-2 bg-white/50 flex  justify-center items-center absolute bottom-2
        "
        >
            <div className="overflow-auto ... w-full h-[100%]">
                {RenderPost.length === 0 ? (
                    <div className="flex justify-between items-center">
                        <div>không có bài viết nào</div>
                    </div>
                ) : (
                    RenderPost.map((e) => (
                        <div
                            key={e.id}
                            className="mb-4 bg-white rounded-2xl p-2"
                        >
                            <div className="flex justify-between items-center">
                                <h3>{e.title}</h3>
                                <select
                                    onChange={(t) => {
                                        const value = t.target.value;

                                        switch (value) {
                                            case "edit":
                                                FormDispatch({
                                                    type: "update",
                                                });
                                                break;

                                            case "delete":
                                                delePost(e);
                                                break;

                                            default:
                                                break;
                                        }
                                    }}
                                    className="outline-none"
                                >
                                    <option value="">...</option>
                                    <option value="edit">Sửa</option>
                                    <option value="delete">Xóa</option>
                                </select>
                            </div>
                            <span>{e.content}</span>
                            <hr className="my-2" />
                            <div className="flex justify-between">
                                <button
                                    onClick={() => {
                                        const temp = { ...e, like: !e.like };
                                        upDatePost(temp);
                                    }}
                                    className="hover:scale-105 flex items-center gap-1"
                                >
                                    {e.like ? (
                                        <Heart className="text-red-500/80 fill-red-500/80" />
                                    ) : (
                                        <Heart />
                                    )}
                                </button>
                                <button className="hover:scale-105">
                                    <CircleUser />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
