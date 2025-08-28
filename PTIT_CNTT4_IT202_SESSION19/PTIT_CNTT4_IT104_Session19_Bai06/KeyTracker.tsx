import React, { useEffect, useState } from 'react'

export default function KeyTracker() {
    const [keyDown, setKeyDown]=useState<string>("");
    useEffect(()=>{
        const handler=(e: KeyboardEvent)=>{
            setKeyDown(e.key)
        }
        window.addEventListener("keydown", handler);
        return ()=>{
            window.removeEventListener("keydown", handler);
        }
    }, []);
  return (
    <div>
      <h1>Ban vua an: {keyDown}</h1>
    </div>
  )
}
