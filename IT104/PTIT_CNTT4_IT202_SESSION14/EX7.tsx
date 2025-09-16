import React, { Component, createRef } from "react";

type StateType = {
    name: string;
    email: string;
    password: string;
    address: string;
    message: string;
};

export default class EX7 extends Component<object, StateType> {
    nameInputRef: React.RefObject<HTMLInputElement>;

    constructor(props: object) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            address: "",
            message: "",
        };
        this.nameInputRef = createRef();
    }

    componentDidMount() {
        if (this.nameInputRef.current) {
            this.nameInputRef.current.focus();
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<StateType, keyof StateType>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, password, address } = this.state;
        if (!name || !email || !password) {
            this.setState({
                message: "Tên sinh viên, Email và Mật khẩu không được để trống",
            });
            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

        const emailExists = storedUsers.some(
            (user: any) => user.email === email
        );
        if (emailExists) {
            this.setState({
                message: "Email đã tồn tại, vui lòng chọn email khác",
            });
            return;
        }

        const newUser = { name, email, password, address };

        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));

        this.setState({
            name: "",
            email: "",
            password: "",
            address: "",
            message: "Đăng ký tài khoản thành công!",
        });

        if (this.nameInputRef.current) {
            this.nameInputRef.current.focus();
        }
    };

    render() {
        const { name, email, password, address, message } = this.state;

        return (
            <div style={{ maxWidth: "400px", margin: "auto" }}>
                <h2>Đăng ký tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tên sinh viên:</label>
                        <input
                            ref={this.nameInputRef}
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="Nhập tên sinh viên"
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="Nhập email"
                        />
                    </div>
                    <div>
                        <label>Mật khẩu:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <div>
                        <label>Địa chỉ:</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={this.handleChange}
                            placeholder="Nhập địa chỉ"
                        />
                    </div>
                    <button type="submit" style={{ marginTop: "10px" }}>
                        Đăng ký
                    </button>
                </form>
                {message && (
                    <p
                        style={{
                            color: message.includes("thành công")
                                ? "green"
                                : "red",
                        }}
                    >
                        {message}
                    </p>
                )}
            </div>
        );
    }
}
