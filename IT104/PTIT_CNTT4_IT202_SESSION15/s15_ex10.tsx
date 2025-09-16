import React, { Component } from "react";

type Student = {
    id: string;
    name: string;
    email: string;
    birthday: string;
    gender: string;
    status: boolean; // true: hoạt động, false: bị chặn
};

type StateType = {
    students: Student[];
    id: string;
    name: string;
    email: string;
    birthday: string;
    gender: string;
};

export default class s15_ex10 extends Component<object, StateType> {
    constructor(props: object) {
        super(props);
        this.state = {
            students: JSON.parse(localStorage.getItem("students") || "[]"),
            id: "",
            name: "",
            email: "",
            birthday: "",
            gender: "",
        };
    }

    // Lưu danh sách vào localStorage
    saveToLocalStorage = (students: Student[]) => {
        localStorage.setItem("students", JSON.stringify(students));
    };

    // Xử lý thay đổi input
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    };

    // Thêm sinh viên
    handleAddStudent = () => {
        const { id, name, email, birthday, gender, students } = this.state;

        // Kiểm tra các trường bắt buộc
        if (!id || !name || !email || !birthday || !gender) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Kiểm tra trùng email
        const isExist = students.some((sv) => sv.email === email);
        if (isExist) {
            alert("Email đã tồn tại!");
            return;
        }

        // Tạo sinh viên mới
        const newStudent: Student = {
            id,
            name,
            email,
            birthday,
            gender,
            status: true,
        };

        const updatedStudents = [...students, newStudent];
        this.setState({
            students: updatedStudents,
            id: "",
            name: "",
            email: "",
            birthday: "",
            gender: "",
        });
        this.saveToLocalStorage(updatedStudents);
    };

    // Chặn hoặc bỏ chặn sinh viên
    handleToggleStatus = (id: string) => {
        const { students } = this.state;
        const updatedStudents = students.map((sv) =>
            sv.id === id ? { ...sv, status: !sv.status } : sv
        );
        this.setState({ students: updatedStudents });
        this.saveToLocalStorage(updatedStudents);
    };

    // Xóa sinh viên
    handleDeleteStudent = (id: string) => {
        if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
            const updatedStudents = this.state.students.filter(
                (sv) => sv.id !== id
            );
            this.setState({ students: updatedStudents });
            this.saveToLocalStorage(updatedStudents);
        }
    };

    render() {
        const { students, id, name, email, birthday, gender } = this.state;

        return (
            <div style={{ padding: "20px" }}>
                <h2>Quản Lý Sinh Viên</h2>

                {/* Form thêm sinh viên */}
                <div>
                    <input
                        type="text"
                        name="id"
                        placeholder="Mã SV"
                        value={id}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên SV"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="date"
                        name="birthday"
                        value={birthday}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="gender"
                        placeholder="Giới tính"
                        value={gender}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleAddStudent}>Thêm</button>
                </div>

                {/* Danh sách sinh viên */}
                <h3>Danh Sách Sinh Viên</h3>
                <table
                    border={1}
                    cellPadding={8}
                    style={{ borderCollapse: "collapse" }}
                >
                    <thead>
                        <tr>
                            <th>Mã SV</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Ngày Sinh</th>
                            <th>Giới Tính</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((sv) => (
                                <tr key={sv.id}>
                                    <td>{sv.id}</td>
                                    <td>{sv.name}</td>
                                    <td>{sv.email}</td>
                                    <td>{sv.birthday}</td>
                                    <td>{sv.gender}</td>
                                    <td>
                                        {sv.status ? "Hoạt động" : "Bị chặn"}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                this.handleToggleStatus(sv.id)
                                            }
                                        >
                                            {sv.status ? "Chặn" : "Bỏ chặn"}
                                        </button>
                                        <button
                                            onClick={() =>
                                                this.handleDeleteStudent(sv.id)
                                            }
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} style={{ textAlign: "center" }}>
                                    Không có sinh viên nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
