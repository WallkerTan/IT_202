    import React, { useState } from 'react'

    export default function Form() {
        const [data, setData]=useState({name: "", email: ""});
        const [error, setError]=useState({name: "name khong duoc de trong", email: "email khong duoc de trong"});
        const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
            const {name, value}=e.target;
            if(name=="name"){
                if(value==""){
                    setError({...error, name: `Ten khong duoc de trong`});
                }else{
                    setError({...error, name: ""})
                }
            }
            if(name=="email"){
                if(value==""){
                    setError({...error, email: "Email khong duoc de trong"});
                }else if((!value.endsWith(".com") || !value.includes("@"))){
                    setError({...error, email: "Email khong hop le"});
                }else{
                    setError({...error, email: ""});
                }
            }
            setData({...data, [name]: value})
        }
        const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            if(error.email=="" && error.name==""){
                alert("Dang ky thanh cong");
            }
        }
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            <h2>Dang ky thong tin</h2>
            <label htmlFor="">Name: </label><br />
            <input name='name' onChange={handleChange} type="text" placeholder='Nhap ho ten'/> <br />
            <p style={{color: "red", fontSize: "15px"}}>{error.name}</p>
            <label htmlFor="">Email: </label><br />
            <input name='email' onChange={handleChange} type="text" placeholder='Nhap email'/> <br />
            <p style={{color: "red", fontSize: "15px"}}>{error.email}</p>
            <button>Gui</button>
        </form>
        </div>
    )
    }
