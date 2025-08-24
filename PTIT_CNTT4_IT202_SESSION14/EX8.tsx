import React, { Component } from "react";

type StateType = {
    email: string;
    password: string;
    error: string;
};

export default class EX8 extends Component<object, StateType> {
    constructor(props: object) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as Pick<
            StateType,
            keyof StateType
        >);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: "Email và Mật khẩu không được để trống" });
            return;
        }

        const savedUser = localStorage.getItem("user");
        if (!savedUser) {
            this.setState({ error: "Chưa có tài khoản nào được đăng ký" });
            return;
        }

        const { email: savedEmail, password: savedPassword } =
            JSON.parse(savedUser);

        if (email === savedEmail && password === savedPassword) {
            alert("Đăng nhập thành công!");
            this.setState({ error: "" });
        } else {
            this.setState({ error: "Đăng nhập thất bại" });
        }
    };

    render() {
        return (
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                <h2>Đăng nhập tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    {this.state.error && (
                        <p style={{ color: "red" }}>{this.state.error}</p>
                    )}
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        );
    }
}
