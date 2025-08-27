import React, { useReducer } from 'react'
type State={color: string}
type Action={
  type: "setColor", payload: string
}
export default function ColorPicker() {
  const reducer=(state: State, action: Action)=>{
    if(action.type=="setColor"){
      return {...state, color: action.payload}
    }
    return state
  }
  const [state, dispatch]=useReducer(reducer, {color: ""})
  return (
    <div>
      <h1>Mau nguoi dung chon: {state.color}</h1>
      <input type="color" onChange={(e)=>dispatch({type: "setColor", payload: e.target.value})}/>
      <h1>Mau hien thi</h1>
      <div style={{width: "100px", height: "100px", backgroundColor: `${state.color}`}}></div>
    </div>
  )
}
