import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const result = useSelector((data:any) => {
        return data.change.say
    });
    const dispath = useDispatch()
    const handleClick = () => {
        dispath({type:"SAY"})
    }
  return (
    <div>
      {result}
      <button onClick={handleClick}>nhan</button>
    </div>
  )
}
