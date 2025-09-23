import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { random } from '../store/slice/randomNumb';

export default function RandomNumber() {
    const reslut = useSelector((data:any) => {
        console.log(data.random);
        return data.random.arrNumber
    });
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(random())
    }
    return (
    <div>
      <p>[{reslut.join(",")}]</p>
      <button onClick={handleClick}>Random</button>
    </div>
  )
}
