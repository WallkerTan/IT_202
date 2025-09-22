import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { StudentType } from "../../Utils/TypeApi";
export default function TableStudent() {
    const student: StudentType[] = useSelector(
        (state: StudentType[]) => state.students
    );
    const dataForm = useSelector((state) => state.dataform);
    console.log("tabledata", dataForm);

    const formShow: StudentType = useSelector((state) => state.showForm);
    console.log(student);
    console.log(formShow);

    const dispatch = useDispatch();
    const handalAction = (type: string, id: string, temp?: StudentType) => {
        dispatch({ type: "show" });
        dispatch({ type: type });
        console.log("type disp", type);
        const curent = student.find((z) => z.id === id);
        console.log("cur ", curent);

        if (type === "delete_form") {
            dispatch({ type: "view_or_update", payload: curent });
        } else if (type === "update_form" && temp) {
            console.log("jbjfshdbfnsbjd");
            console.log("temp", temp, type);
            dispatch({ type: type });
            dispatch({ type: "view_or_update", payload: curent });
            dispatch({ type: "update_student", id: id, payload: temp });
        } else {
            dispatch({ type: "nodata" });
        }
    };
    useEffect(() => {}, [dispatch]);
    return (
        <div className=" max-w-[100%] flex-1 p-4">
            <header>
                <h1>Quản lí sinh viên</h1>
            </header>
            <div className="flex justify-between mb-2">
                <Button
                    className="rounded-pill"
                    onClick={() => handalAction("add_form", "")}
                >
                    Thêm mới sinh viên
                </Button>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        className="border-1 rounded-2xl focus:outline-green-300 px-2"
                    />
                    <Button className="rounded-pill">Tìm kiếm</Button>
                    <Button className="rounded-pill">Sắp xếp</Button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>MSV</th>
                        <th>TÊN</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {student.length == 0 ? (
                        <tr>
                            <td>haha</td>
                        </tr>
                    ) : (
                        student.map((e, index) => (
                            <tr key={e.id}>
                                <td>{index + 1}</td>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.gender}</td>
                                <td className="flex justify-around border-0">
                                    <Button
                                        className="w-[30%] rounded-pill"
                                        onClick={() =>
                                            handalAction("show_form", e.id)
                                        }
                                    >
                                        Xem
                                    </Button>
                                    <Button
                                        className="w-[30%] rounded-pill"
                                        variant="success"
                                        onClick={() =>
                                            handalAction("update_form", e.id, e)
                                        }
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        className="w-[30%] rounded-pill"
                                        variant="danger"
                                        onClick={() =>
                                            handalAction("delete_form", e.id)
                                        }
                                    >
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}