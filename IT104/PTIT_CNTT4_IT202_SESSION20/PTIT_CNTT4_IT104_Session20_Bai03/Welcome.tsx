import React, { useEffect } from 'react'

export default function Welcome() {
    useEffect(()=>{
        console.log("component duoc render lan dau");
    }, [])
  return (
    <div>
      <h1>Chao mung ban den voi ung dung cua chung toi!!</h1>
    </div>
  )
}
