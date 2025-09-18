import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Dark() {
    const result = useSelector((data:any) => {
        console.log(data.dark2.check);
        return data.dark2.check
    })
    const dispath = useDispatch();
    const handleChange = () => {
        dispath({type:"DARK"})
    }
  return (
    <>
     <div style={{
        width:"200px",
        height:"200px",
        border:"1px solid red",
        backgroundColor:result== true ? "white" : "black",
        color:result== true ? "black" : "white",
     }}>
        <input type="checkbox" onChange={handleChange} checked={result === false } /> 
        <label htmlFor="">{result === true ? "sang" : "toi"}</label>    
     </div> 
    </>
  )
}
