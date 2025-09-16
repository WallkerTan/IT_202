import React, { useReducer } from 'react'
const data = [
  {
    id: 1,
    name: "Apple iPhone 13",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    description: "Điện thoại thông minh giá rẻ",
  },
];
type Action={type: "search", payload: string}
export default function Search() {
    const reducer=(search: string, action: Action): string =>{
        if(action.type=="search"){
            return `${action.payload}`
        }
        return search
    }
    const [search, dispatch]=useReducer(reducer, "")
    const searchResults=data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div style={{width: "800px", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
      <h1>Tim kiem san pham</h1>
      <input type="text" onChange={(e)=>dispatch({type: "search", payload: e.target.value})}/>
      <div>{searchResults.length} ket qua tim thay cho "{search}"</div>
      <div style={{width: "100%", display: "flex", flexWrap: "wrap", margin: "auto", gap: "10px"}}>
        {searchResults.map((item, index) =>
          {return <div style={{marginLeft: "120px"}} key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>})
        }
      </div>
    </div>
  )
}
