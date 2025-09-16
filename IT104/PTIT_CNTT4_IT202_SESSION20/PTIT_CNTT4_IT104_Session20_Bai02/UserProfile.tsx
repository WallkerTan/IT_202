import React, { useState } from 'react'
type State={
    name: string,
    email: string
}
export default function UserProfile() {
    const [state, setState]=useState<State>({name: "", email: ""});
    const [isVisible, setVisibility]=useState<boolean>(false)
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target
        setState({...state, [name]: value});
        setVisibility(false)
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setVisibility(true)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Thong tin nguoi dung</h2>
        <input type="text" name="name" value={state.name} placeholder='Nhap ten' onChange={handleChange}/> <br />
        <input type="text" name="email" value={state.email} placeholder='Nhap email' onChange={handleChange}/> <br />
        <button>Gui</button>
        <div style={{display: `${isVisible ? "block" : "none"}`}}>
            <div>name: {state.name}</div>
            <div>email: {state.email}</div>
        </div>
      </form>
    </div>
  )
}
