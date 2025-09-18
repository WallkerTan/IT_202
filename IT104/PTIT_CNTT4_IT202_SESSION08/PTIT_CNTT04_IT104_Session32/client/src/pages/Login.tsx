import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Login() {
    const reslut = useSelector((data:any) => {
        console.log(data.register);
        return data.register; 
    })

    const [email, setEmail] = useState(reslut.email);
    const [password, setPassword] = useState(reslut.pass);
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePass = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        if(reslut.email!== email || reslut.pass !== password){
            alert("tai khoan hoac mat khau khong hop le");
            return
        }
        alert("dang nhap thanh cong");  
    }
  return (
    <div>
      <h1>Dang nhap</h1>
      <input type="text" placeholder="nhap email" onChange={handleEmail} value={email}/>
      <br />
      <input type="password" placeholder="nhap mat khau" onChange={handlePass} value={password}/>
      <br />
      <button onClick={handleLogin}>Dang nhap</button>
    </div>
  );
}
