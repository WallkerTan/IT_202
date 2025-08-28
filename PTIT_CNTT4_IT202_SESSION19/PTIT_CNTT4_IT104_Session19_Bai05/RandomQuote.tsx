import React, { useState } from 'react'

export default function RandomQuote() {
    const quotes=[
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
    ]
    const [quote, setQuote]=useState<string>("")
    const changeQuote=()=>{
        const random= Math.floor(Math.random()*quotes.length)
        setQuote(quotes[random])
    }
  return (
    <div>
      <h1>Cau noi truyen cam hung hom nay</h1>
      <p>{quote}</p>
      <button onClick={changeQuote}>Lay cau noi moi</button>
    </div>
  )
}
