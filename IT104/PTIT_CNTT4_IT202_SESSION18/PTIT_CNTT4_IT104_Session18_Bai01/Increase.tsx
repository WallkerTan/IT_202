import React, { useReducer } from 'react'
export default function Increase() {
    const reducer=(state: number, action: {type: "increase"}): number=>{
        if(action.type=="increase"){
            return state+1
        }
        return state
    }
    const [state, dispatch]=useReducer(reducer, 0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type: "increase"})}>Increase</button>
    </div>
  )
}
