import React, { useMemo, useState } from 'react'
type User = {
  id: number;
  name: string;
  age: number;
};
export default function UserList() {
    const [users]=useState<User[]>([
        {
            id: 1,
            name: "duy anh",
            age: 36
        },{
            id: 2,
            name: "tuan minh",
            age: 6
        },{
            id: 3,
            name: "hai anh",
            age: 19
        }
    ]);
    const adult=useMemo(()=>
    {return users.filter((user) => user.age>18)}, [users])
  return (
    <div>
        <h2>Danh sach nguoi dung tren 18 tuoi</h2>
        <div>
            {adult.map((user, index) =>{
                return <div key={index}>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                    <div>age: {user.age}</div>
                    <br />
                </div>
            })}
        </div>
    </div>
  )
}
