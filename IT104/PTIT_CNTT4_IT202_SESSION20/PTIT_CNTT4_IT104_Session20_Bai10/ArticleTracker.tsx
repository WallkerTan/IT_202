import React, { useReducer } from 'react'
type Article={
    id: number,
    title: string
}
type State={
    read: Article[],
    unread: Article[]
}
type Action={type: "markAsRead", payload: number} | {type: "markAsUnread", payload: number}
export default function ArticleTracker() {
    const reducer=(state: State, action: Action): State=>{
        if(action.type=="markAsRead"){
            return {read: [...state.read, state.unread[action.payload]], unread: state.unread.filter((item, index) => index!=action.payload)}
        }else if(action.type=="markAsUnread"){
            return {read: state.read.filter((item, index) => index!=action.payload), unread: [...state.unread, state.read[action.payload]]}
        }
        return state
    }
    const [state, dispatch]=useReducer(reducer, {
        read: [],
        unread: [
            {id: 1, title: "Huong dan su dung react"},
            {id: 2, title: "Tim hieu ve javaScript ES6"},
            {id: 3, title: "CSS Grid vs Flexbox"},
            {id: 4, title: "Huong dan toi uu hoa hieu suat web"}
        ]
    })
  return (
    <div style={{width: "1000px", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Quan li bai viet</h1>
      <br />
      <h2>Bai viet chua doc ({state.unread.length})</h2>
      <div>{state.unread.map((item, index) => {
        return <div key={index} style={{display: "flex", justifyContent: "space-between", width: "800px"}}>
            <h3>{item.title}</h3>
            <button onClick={()=>dispatch({type: "markAsRead", payload: index})}>Danh dau da doc</button>
        </div>
      })}</div>
      <br />
      <h2>Bai viet da doc ({state.read.length})</h2>
      <div>{state.read.map((item, index) => {
        return <div key={index} style={{display: "flex", justifyContent: "space-between", width: "800px"}}>
            <h3>{item.title}</h3>
            <button onClick={()=>dispatch({type: "markAsUnread", payload: index})}>Danh dau chua doc</button>
        </div>
      })}</div>
    </div>
  )
}
