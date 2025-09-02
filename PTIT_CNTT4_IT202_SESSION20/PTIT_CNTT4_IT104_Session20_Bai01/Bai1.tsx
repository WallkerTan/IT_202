import React, { useState } from 'react'

export default function Bai1() {
    const [input, setInput]=useState<string>("");
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }
  return (
    <div>
      <h2>Kiem tra do dai chuoi nhap vao</h2>
      <input type="text" onChange={handleChange} placeholder='Nhap vao day'/>
      <h2 style={{color: "red"}}>{input.length>5 ? "Chuoi nhap vao dai hon 5 ky tu" : ""}</h2>
    </div>
  )
}
