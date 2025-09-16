import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userList } from './ListUser';
export default function UserDetail() {
    const { index } = useParams();
    const navigate = useNavigate();
  return (
    <div>
      <h2>Thong tin chi tiet</h2>
      <div style={{border: "1px black solid"}}>
            <p>Id: {userList[Number(index)].id}</p>
            <p>UserName: {userList[Number(index)].userName}</p>
            <p>Email: {userList[Number(index)].email}</p>
            <p>Address: {userList[Number(index)].address}</p>
            <button onClick={()=>navigate("/")}>Quay lai</button>
    </div>
    </div>
  )
}
