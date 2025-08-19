import React from 'react'

export default function ColorBox() {
    const color:string[]=["red","blue","green"];
  return (
    <div>
        {
            color.map((item) => {
            return <div style={{
                width:"200px",
                height:"200px",
                background:item,
                margin:"10px",
                color:"black",
                textAlign:"center",
                lineHeight:"200px"
            }}>
                Box : {item}
            </div> 
    })
        }
    </div>
  )
}