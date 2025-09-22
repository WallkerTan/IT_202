import React from "react";
import { Input } from "antd";
import { CircleX } from "lucide-react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

export default function FormStudent() {
    const data = useSelector((state) => state.dataform);
    const theForm = useSelector((state) => state.theForm);
    const formShow = useSelector((state) => state.showForm);
    console.log("data", data);

    const dispatch = useDispatch();
    const close = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(formShow);
        dispatch({ type: "hide" });
    };
    const handalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (theForm == 1) {
            dispatch({ type: "add_student", payload: data });
        } else if (theForm == 3) {
            dispatch({
                type: "update_student",
                payload: data,
            });
        } else if (theForm == 2) {
            dispatch({
                type: "delete_student",
                id: data.id,
            });
        }
        dispatch({ type: "hide" });
    };
    const r = () => {
        switch (theForm) {
            case 1:
                return "Thêm Sinh Viên";
            case 2:
                return "Xóa sinh viên";
            case 3:
                return "Cập nhật Thông tin";
            case 0:
                return "Thông tin sinh viên";
            default:
                return "Xóa sinh viên";
        }
    };
    return (
        <div className="w-full h-full absolute bg-gray-500/30">
            <form
                onSubmit={handalSubmit}
                className="absolute bg-teal-300 max-w-[600px] w-[30%] p-4 flex flex-col gap-1.5 left-1/2 -translate-x-1/2 h-[500px] top-1/2 -translate-y-1/2 rounded-2xl"
            >
                <div className=" flex justify-around items-center">
                    <h3>{r()}</h3>
                    <button onClick={close}>
                        <CircleX />
                    </button>
                </div>
                <Input
                    placeholder="MSV"
                    disabled={theForm != 1}
                    className="bg-white"
                    value={data.id}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, id: e.target.value },
                        })
                    }
                />
                <Input
                    className="bg-white"
                    placeholder="Tên"
                    disabled={theForm === 0 || theForm === 2}
                    value={data.name}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, name: e.target.value },
                        })
                    }
                />
                <Input
                    className="bg-white"
                    placeholder="Tuổi"
                    disabled={theForm === 0 || theForm === 2}
                    value={data.age}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, age: e.target.value },
                        })
                    }
                />
                <Form.Select
                    className="bg-white"
                    aria-label="gender"
                    value={data.gender}
                    disabled={theForm === 0 || theForm === 2}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, gender: e.target.value },
                        })
                    }
                >
                    <option value="nu">nu</option>
                    <option value="nam">nam</option>
                </Form.Select>

                <Input
                    className="bg-white"
                    placeholder="Ngày sinh"
                    disabled={theForm === 0 || theForm === 2}
                    value={data.birthday}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, birthday: e.target.value },
                        })
                    }
                />
                <Input
                    className="bg-white"
                    placeholder="Nơi sinh"
                    disabled={theForm === 0 || theForm === 2}
                    value={data.hometown}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, hometown: e.target.value },
                        })
                    }
                />
                <Input
                    className="bg-white"
                    placeholder="Địa chỉ"
                    disabled={theForm === 0 || theForm === 2}
                    value={data.address}
                    onChange={(e) =>
                        dispatch({
                            type: "view_or_update",
                            payload: { ...data, address: e.target.value },
                        })
                    }
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}