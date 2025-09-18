import React from 'react'
import { useSelector } from 'react-redux'

export default function Student() {
    const result = useSelector((data:any) => {
      console.log(data.student);
        return data.student.users;
    })
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Ten</th>
            <th>Gioi tinh</th>
            <th>Ngay sinh</th>
            <th>Dia chi</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map((value:any , index:number) => {
              return <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.gender}</td>
                <td>{value.birth}</td>
                <td>{value.address}</td>
                <td>
                  <button>Sua</button>
                  <button>Xoa</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
