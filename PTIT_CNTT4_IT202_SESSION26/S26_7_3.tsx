import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function S26_7_3() {
    const [searchParam] = useSearchParams();
    const data = searchParam.get("data");
    const member = data ? JSON.parse(decodeURIComponent(data)) : null;
    const navigate = useNavigate();
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg w-96 mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Thông tin thành viên
            </h2>
            <div className="text-lg">
                <p>
                    <strong>ID:</strong> {member.id}
                </p>
                <p>
                    <strong>Tên:</strong> {member.name}
                </p>
                <p>
                    <strong>Tuổi:</strong> {member.age}
                </p>
                <Button onClick={() => navigate(-1)}>Thoát</Button>
            </div>
        </div>
    );
}
