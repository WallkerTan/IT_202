import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (!email || !pass) {
      alert("Hãy nhập đầy đủ");
      return;
    }
    dispatch({
      type: "REGISTER",
      payload: { email, pass },
    });
    alert("Đăng ký thành công!");
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <input
        type="text"
        placeholder="Nhập email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Đăng ký</button>
    </div>
  );
}
