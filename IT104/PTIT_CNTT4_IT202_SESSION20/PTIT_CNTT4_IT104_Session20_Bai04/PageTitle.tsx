import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [title, setTitle]=useState<string>("");
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    useEffect(()=>{
        document.title=title
    }, [title])
  return (
    <div style={{width: "900px", margin: "auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <h1>Chao mung ban den voi ung dung cua chung toi!!</h1>
      <input type="text" placeholder='Nhap tieu de trang' onChange={handleChange}/>
      <p>tieu de trang se thay doi khi ban nhap vao truong tren</p>
    </div>
  )
}
