import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function PostOptionRender({
    FormDispatch,
}: {
    FormDispatch: (action: { type: "Add" | "update" | "close" }) => void;
}) {
    return (
        <div className="w-[30%] h-[25%] bg-white/30 flex flex-col  py-2 items-center rounded-2xl hover:scale-102 absolute top-[80px]">
            <div className="flex justify-evenly gap-[10px] w-full">
                <header>
                    <div>Lọc theo: </div>
                </header>
                <div>
                    <Form.Select>
                        <option>Tất cả bài viết</option>
                        <option>Đã like</option>
                        <option>No like</option>
                    </Form.Select>
                    <br />
                </div>
            </div>
            <Button
                variant="primary"
                onClick={() => FormDispatch({ type: "Add" })}
            >
                Primary
            </Button>
        </div>
    );
}
