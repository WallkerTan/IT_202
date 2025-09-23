import { useDispatch, useSelector } from "react-redux"
import type { Student } from "../utils/type"
import { useState } from "react"
import { addStudent, deleStudent } from "../store/slice/userSlice"

export default function StudentManger() {
    const reslut = useSelector((data:any)=> {
        return data.student.student
    })
    const [user,setUser]   = useState<Student>({
        id:Math.floor(Math.random()*9999),
        name:""
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, name : e.target.value})
    }
    const dispatch:any = useDispatch()
    const addStudent2 = () => {
        dispatch(addStudent(user))
    }
    const handleDelete = (value:Student) => {
        dispatch(deleStudent(value));
    }
  return (
    <div>
        <h1>Quan li sinh vien</h1>
        <input type="text"  placeholder="nhap ten" onChange={handleChange}/>
        <button onClick={addStudent2}>Them</button>
        <ul>
            {reslut.map((item:Student,index:number) => {
                return <li key={index}>
                    {item.name}
                    <button onClick={() => handleDelete(item)}>Xoa</button>
                </li>
            })}
        </ul>
    </div>
  )
}
