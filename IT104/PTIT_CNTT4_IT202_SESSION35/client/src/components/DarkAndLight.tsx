import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/slice/darkAndLight';

export default function DarkAndLight() {
    const reslut = useSelector((data:any) =>{
        return data.darkAndLight.isDarkMode
    })
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(toggleTheme())
    }
  return (
    <div style={{
        border:"1px solid red" , 
        width:"200px",
        height:"200px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor : reslut == true ? "black" : "white",
    }}>
      <button onClick={handleToggle}>{reslut == true  ?  "dark" : "light"}</button>
    </div>
  )
}
