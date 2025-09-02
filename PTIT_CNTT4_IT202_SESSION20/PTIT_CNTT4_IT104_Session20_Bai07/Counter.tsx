import React, { useReducer } from 'react'
type Action={type: "increase"} | {type: "decrease"}
export default function Counter() {
    const reducer=(counter: number, action: Action): number=>{
        if(action.type=="increase"){
            return counter+1
        }else if(action.type=="decrease"){
            return counter-1
        }else{
            return counter
        }
    }
    const [counter, dispatch]=useReducer(reducer, 0)
  return (
    <div>
      <h1>So dem: {counter}</h1>
      <button onClick={()=>dispatch({type: "increase"})}>Tang</button>
      <button onClick={()=>dispatch({type: "decrease"})}>Giam</button>
    </div>
  )
}
