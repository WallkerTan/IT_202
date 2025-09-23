
import { HeartFilled } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatue } from '../store/slice/favorites';

export default function Favorites() {
    const reslut = useSelector((data:any) => {
            console.log(data.changeStatue.user);
            
            return data.changeStatue.user
    })
    const dispatch = useDispatch();
    const handleChangeFavorits = (id:number) => {
        dispatch(changeStatue(id))
    }
  return (
    <div>
        {reslut.map((value:any , index : number) => {
            return <div key={index}>
                <p>UserName : {value.userName}</p>
                <p>Favorites : <HeartFilled onClick={() => handleChangeFavorits(value.id)} style={{
                    color: value.status === true  ? "red" : ""
                }}/></p>
            </div>
        })}
    </div>
  )
}
