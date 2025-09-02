import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [second, setSecond]=useState<number>(0)
    useEffect(()=>{
        const timer=setInterval(()=>{setSecond(second+1)}, 1000);

        return ()=>{
            clearInterval(timer)
        }
    })
  return (
    <div>
      <h1>{second}</h1>
    </div>
  )
}
