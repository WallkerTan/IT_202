import React, { useState } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
type User={
  email: string,
  password: string,
}
type UserInfo={
  email: string,
  password: string,
}
export default function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo]=useState<UserInfo>({email: "", password: ""});
  const [users]=useState<User[]>(JSON.parse(localStorage.getItem("users") || '[]'))
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {value, name}=e.target;
    setUserInfo({...userInfo, [name]: value});
  }
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(userInfo.email == "" || userInfo.password == ""){
      alert("Khong duoc de trong thong tin");
      return;
    }
    if(!users.find((user: User) => user.email==userInfo.email && user.password==userInfo.password)){
      alert("Email hoac mat khau khong chinh xac");
      return;
    }
    alert("Dang nhap thanh cong");
    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    setUserInfo({email: "", password: ""});
    navigate("/homePage");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Login account</p>
        <div className="input-container">
          <input placeholder="Enter email" type="email" value={userInfo.email} name="email" onChange={handleChange}/>
          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className="input-container">
          <input placeholder="Enter password" type="password" value={userInfo.password} name="password" onChange={handleChange}/>

          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <button className="submit" type="submit">
          Login an account
        </button>

        <p className="signup-link">
          Dont have an account?
          <Link to={"/register"}> Register</Link>
        </p>
      </form>
    </div>
  );
}
