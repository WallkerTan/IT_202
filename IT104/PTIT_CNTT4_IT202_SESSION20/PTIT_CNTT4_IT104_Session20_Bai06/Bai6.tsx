import React, { useEffect, useRef, useState } from 'react'

export default function Bai6() {
    const [isVisible, setVisibility]=useState<boolean>(false)
    const target=useRef<HTMLInputElement>(null)
    useEffect(()=>{
        target.current?.focus()
    }, [isVisible])
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "600px", position: "relative"}}>
      <h1>Ung dung React voi Modal va Focus Input</h1>
      <button onClick={()=>{setVisibility(true)}}>Mo modal</button>
      <div style={{display: `${isVisible ? "block" : "none"}`, backgroundColor: "rgba(130, 130, 130, 0.5)", width: "100%", height: "115%", position: "absolute", top: "10px"}}>
        <div style={{position: "absolute", top: "150px", left: "34%", width: "500px", height: "300px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px"}}>
            <h2>Dang nhap</h2>
            <input ref={target} type="text" placeholder='Nhap ten nguoi dung'/>
            <button onClick={()=>setVisibility(false)}>Dong</button>
        </div>
      </div>
    </div>
  )
}
