import React, { useEffect, useState } from "react";
import { CircleX } from "lucide-react";
import Button from "react-bootstrap/Button";

type PostType = {
    id: number;
    title: string;
    content: string;
    like: boolean;
};
// Quản lý modal form (thêm / sửa post)
type FormModalType = {
    status: boolean; // form đang mở hay không
    FormType: boolean; // true -> add , false -> update
    PostUpdate?: PostType; // post cần update (nếu có)
};

export default function PostFormModal({
    FormDispatch,
    NewPost,
    Posts,
    upDatePost,
    FormModal,
}: {
    Posts: PostType[];
    NewPost: (t: PostType) => void;
    upDatePost: (temmp: PostType) => void;
    FormModal: FormModalType;
    FormDispatch: (action: { type: "Add" | "update" | "close" }) => void;
}) {
    const t = true;
    useEffect(() => {}, [t]);
    const handalsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (FormModal.FormType) {
            setData({
                ...dataAdd,
                id: Posts.length == 0 ? 1 : Posts[Posts.length - 1].id + 1,
            });
            NewPost(dataAdd);
        } else {
            setData({
                ...dataAdd,
                id: Posts.length == 0 ? 1 : Posts[Posts.length - 1].id + 1,
            });
            upDatePost(dataAdd);
        }
        FormDispatch({ type: "close" });
    };
    const [dataAdd, setData] = useState<PostType>(
        FormModal.PostUpdate || {
            id: -1,
            title: "",
            content: "",
            like: false,
        }
    );
    useEffect(() => {
        if (FormModal.PostUpdate) {
            setData(FormModal.PostUpdate);
        } else {
            setData({
                id: -1,
                title: "",
                content: "",
                like: false,
            });
        }
    }, [FormModal.FormType, FormModal.PostUpdate]);
    return (
        <form
            onSubmit={handalsubmit}
            className=" w-[40%] flex flex-col absolute left-1/2 -translate-x-1/2 top-[25%] justify-center bg-white rounded-2xl p-2"
        >
            <header className="flex justify-between items-center w-full border-b-1">
                <h3>{FormModal.FormType ? "Thêm bài viết" : "Sửa bài viết"}</h3>
                <button onClick={() => FormDispatch({ type: "close" })}>
                    <CircleX />
                </button>
            </header>
            <div>
                <label htmlFor="">Tiêu đề</label>
                <br />
                <input
                    type="text"
                    value={dataAdd?.title}
                    onChange={(e) =>
                        setData({ ...dataAdd, title: e.target.value })
                    }
                    className="w-full rounded-2xl border-1/50 focus:outline-green-300 px-2 py-1 bg-gray-500/8"
                />
            </div>
            <div>
                <label htmlFor="">Nội dung</label>
                <br />
                <textarea
                    value={dataAdd.content}
                    onChange={(e) =>
                        setData({ ...dataAdd, content: e.target.value })
                    }
                    className="w-full h-[200px] border-1/50 rounded-2xl focus:outline-green-300 px-2 py-1 resize-none bg-gray-500/10"
                />
            </div>
            <Button
                type="submit"
                variant="primary"
                disabled={!dataAdd.content.trim() || !dataAdd.title.trim()}
                className="rounded-pill my-3 cursor-not-allowed"
            >
                {FormModal.FormType ? "Đăng bài viết" : "Xác nhận"}
            </Button>
        </form>
    );
}
