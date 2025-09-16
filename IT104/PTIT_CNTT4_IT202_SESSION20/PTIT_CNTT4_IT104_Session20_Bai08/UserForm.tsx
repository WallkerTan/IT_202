import React, { useReducer } from 'react'
type User={
    name: string,
    email: string
}
type Action={type: "change", target: string, payload: string}
export default function UserForm() {
    const reducer=(user: User, action: Action): User=>{
        if(action.type=="change"){
            return {...user, [action.target]: action.payload}
        }else{
            return user
        }
    }
    const [user, dispatch]=useReducer(reducer, {name: "", email: ""})
  return (
    <div>
      <form action="">
        <h2>User Information Form</h2>
        <label htmlFor="">Ten: </label> <br />
        <input type="text" onChange={(e)=>dispatch({type: "change", target: "name", payload: e.target.value})}/> <br />
        <label htmlFor="">Email: </label> <br />
        <input type="text" onChange={(e)=>dispatch({type: "change", target: "email", payload: e.target.value})}/>
      </form>
      <div>
        <br />
        <h2>Thong tin nguoi dung</h2>
        <div>Ten: {user.name=="" ? "(chua nhap)" : user.name}</div>
        <div>Email: {user.email=="" ? "(chua nhap)" : user.email}</div>
      </div>
    </div>
  )
}
