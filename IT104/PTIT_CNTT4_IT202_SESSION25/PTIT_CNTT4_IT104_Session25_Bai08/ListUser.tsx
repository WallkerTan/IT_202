import React from 'react'
import { useNavigate } from 'react-router-dom'
type User={
    id: number
    userName: string,
    email: string,
    address: string
}
// eslint-disable-next-line react-refresh/only-export-components
export const userList: User[]=[
    {id: 1, userName: "Nguyen Van A", email: "nva@gmail.com", address: "Ha Noi"},
    {id: 2, userName: "Nguyen Van B", email: "nvb@gmail.com", address: "Ha Nam"},
    {id: 3, userName: "Nguyen Van C", email: "nvc@gmail.com", address: "Ninh Binh"},
]
export default function ListUser() {
    const navigate = useNavigate();
  return (
    <div style={{display: "flex", gap: "15px"}}>
      {userList.map((item, index) => {
        return <div key={index} style={{border: "1px black solid", padding: "10px"}}>
            <p>Id: {item.id}</p>
            <p>UserName: {item.userName}</p>
            <p>Email: {item.email}</p>
            <p>Address: {item.address}</p>
            <button onClick={()=>navigate(`/user/${index}`)}>Xem chi tiet</button>
        </div>
      })}
    </div>
  )
}
