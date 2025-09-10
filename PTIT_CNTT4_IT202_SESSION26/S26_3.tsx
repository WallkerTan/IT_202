import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function S26_3() {
    const [SearchParam] = useSearchParams();
    const navigate = useNavigate();
    const studentName = SearchParam.get("StudentName");
    const [input, setInput] = useState<string>("");
    const handalClick = () => {
        navigate(`?StudentName=${input}`);
    };
    return (
        <div className="bg-red-300 p-3 rounded-2xl">
            <h2>nhập liệu</h2>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-1 rounded-2xl bg-gray-300/30"
                />
                {studentName ? (
                    <p>Student name: {studentName}</p>
                ) : (
                    <p>Không có tên sinh viên nào được truyền!</p>
                )}
                <Button onClick={handalClick}>Tìm kiếm</Button>
            </div>
        </div>
    );
}
