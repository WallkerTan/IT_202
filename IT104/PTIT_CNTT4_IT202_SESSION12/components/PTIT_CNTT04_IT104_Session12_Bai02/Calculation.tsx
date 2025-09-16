import React from 'react'

export default function Calculation() {
    const a = 10;
    const b = 10;
    function add(a:number,b:number):number{return a+b};
    function signal(a:number,b:number):number{return a-b};
    function accumulation(a:number,b:number):number{return a*b}
    function divide(a:number,b:number):number{return a/b}
    return (
    <div>
      <b>Danh sach ket qua:</b>
      <p>{a} + {b} = {add(a,b)}</p>
      <p>{a} - {b} = {signal(a,b)}</p>
      <p>{a} * {b} = {accumulation(a,b)}</p>
      <p>{a} / {b} = {divide(a,b)}</p>
    </div>
  )
}