import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Random() {
    const res:any = useSelector((data:any) => {
        console.log(data.numbRandom.arrNumberRandom);
        return data.numbRandom.arrNumberRandom
    })
    const dispath = useDispatch();
    const handleRandom = () => {
        dispath({type:"RANDOM"});
    }   
  return (
    <div>
        <p>[{res.join(",")}]</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  )
}
