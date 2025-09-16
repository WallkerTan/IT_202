import React, { useRef, useState } from 'react'

export default function Bai3() {
    const [state, seState]=useState<string>("");
    const ref=useRef(0);
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        seState(e.target.value);
        ref.current+=1;
    }
  return (
    <div>
      <label htmlFor="">input: <input value={state} type="text" onChange={handleChange}/></label>
      <p>Da render {ref.current} lan</p>
    </div>
  )
}
