import React, { useEffect, useReducer, useState } from "react";
import { Heart, X } from "lucide-react";
import PostOptionRender from "./PostOptionRender";
import PostMainContent from "./PostMainContent";
import PostFormModal from "./PostFormModal";
import PostPagination from "./PostPagination";

type PostType = {
    id: number;
    title: string;
    content: string;
    like: boolean;
};

type FormModalType = {
    status: boolean; 
    FormType: boolean; 
    PostUpdate?: PostType; 
};

type actionType = {
    type: "update" | "Add" | "close";
    Payload?: PostType;
};

type PaginationState = {
    current: number;
    pageSize: number;
    total: number;
};

type PaginationAction = {
    type: "RESET" | "SET_PAGE" | "SET_PAGE_SIZE";
    payload?: number;
};

const reducerPost = (FormModal: FormModalType, action: actionType) => {
    switch (action.type) {
        case "Add":
            return { status: true, FormType: true, PostUpdate: undefined };
        case "update":
            return {
                status: true,
                FormType: false,
                PostUpdate: action.Payload,
            };
        case "close":
            return { status: false, FormType: true, PostUpdate: undefined };
        default:
            return FormModal;
    }
};

const paginationReducer = (
    state: PaginationState = initialPage,
    action: PaginationAction
) => {
    switch (action.type) {
        case "RESET":
            return { ...state, current: 1, pageSize: state.pageSize };
        case "SET_PAGE":
            return { ...state, current: action.payload ?? state.current };
        case "SET_PAGE_SIZE":
            return { ...state, pageSize: action.payload ?? state.pageSize };
        default:
            return state;
    }
};

const initialForm: FormModalType = { status: false, FormType: false };
const initialPage: PaginationState = { current: 1, pageSize: 1, total: 100 };

export default function PostHeaderManeger() {
    const [FormModal, FormDispatch] = useReducer(reducerPost, initialForm);

    const [Posts, setPosts] = useState<PostType[]>(() => {
        const localData = localStorage.getItem("Posts");
        return localData ? JSON.parse(localData) : [];
    });

    const [PaginationItem, PagiDispatch] = useReducer(
        paginationReducer,
        initialPage
    );

    const NewPost = (t: PostType): void => {
        const cur = [...Posts, t];
        setPosts(cur);
    };
    const upDatePost = (t: PostType): void => {
        setPosts((prev) => prev.map((e) => (e.id === t.id ? t : e)));
    };

    const delePost = (t: PostType) => {
        const cur = Posts.filter((e) => e.id != t.id);
        setPosts(cur);
    };

    const endPage = PaginationItem.current * PaginationItem.pageSize;
    const startpage = endPage - PaginationItem.pageSize;
    const RenderPost = Posts.slice(startpage, endPage);
    const AllLike = Posts.reduce((acc, cur) => {
        return acc + (cur.like ? 1 : 0);
    }, 0);

    useEffect(() => {
        const newPostsdata = localStorage.getItem("Posts");
        if (!newPostsdata) return; 

        try {
            const parsed = JSON.parse(newPostsdata);
            if (Array.isArray(parsed)) {
                setPosts(parsed);
            } else {
                console.warn(
                    "Dữ liệu trong localStorage không đúng dạng mảng:",
                    parsed
                );
            }
        } catch (error) {
            console.error("Lỗi parse JSON từ localStorage:", error);
            localStorage.removeItem("Posts"); 
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Posts", JSON.stringify(Posts));
    }, [Posts, RenderPost]);

    return (
        <div className="flex-col justify-center items-center bg-gradient-to-b from-purple-200 to-purple-800 w-[70%] h-[70%] rounded-2xl relative ">
            {/* Header: thống kê số bài viết, số lượt like */}
            <header className="flex justify-center gap-[20px] pt-2 absolute inset-x-0">
                <div className="flex flex-col justify-center items-center bg-white/30 rounded-2xl p-2 text-white hover:scale-125 transition-transform cursor-pointer">
                    <span>{Posts.length}</span>
                    <span>bài viết</span>
                </div>
                <div className="flex justify-center items-center bg-white/30 rounded-2xl p-2 text-white hover:scale-125 transition-transform cursor-pointer">
                    <div>
                        {AllLike == 0 ? (
                            <Heart />
                        ) : (
                            <Heart className=" text-red-500/80 fill-red-500/80 " />
                        )}
                    </div>
                    <div className="flex justify-center items-center">
                        <X />
                        <div className="text-2xl">{AllLike}</div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="flex flex-col justify-center items-center mt-4 h-[80%]">
                <PostOptionRender FormDispatch={FormDispatch} />
                <PostMainContent
                    FormDispatch={FormDispatch}
                    Posts={Posts}
                    PaginationItem={PaginationItem}
                    PagiDispatch={PagiDispatch}
                    RenderPost={RenderPost}
                    delePost={delePost}
                    upDatePost={upDatePost}
                />
            </main>

            {FormModal.status && (
                <div className="fixed inset-0 bg-black/50 ">
                    <PostFormModal
                        Posts={Posts}
                        NewPost={NewPost}
                        FormDispatch={FormDispatch}
                        FormModal={FormModal}
                        upDatePost={upDatePost}
                    />
                </div>
            )}

            <div>
                <PostPagination
                    Posts={Posts}
                    PagiDispatch={PagiDispatch}
                    PaginationItem={PaginationItem}
                />
            </div>
        </div>
    );
}
