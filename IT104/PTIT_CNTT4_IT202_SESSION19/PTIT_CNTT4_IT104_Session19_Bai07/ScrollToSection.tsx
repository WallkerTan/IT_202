import React, { useRef } from 'react'

export default function ScrollToSection() {
    const target=useRef<HTMLDivElement>(null)
  return (
    <div>
      <h1>Cuon toi noi dung</h1>
      <button onClick={()=> target.current?.scrollIntoView({behavior: "smooth"})}>Di toi phan noi dung</button>
      <div style={{width: "500px", height: "10000px", backgroundColor: "royalBlue", margin: "10px 0"}}></div>
      <section ref={target}><h1>aaaaaaa</h1></section>
    </div>
  )
}
