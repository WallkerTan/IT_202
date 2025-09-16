import React, { createContext, useState } from 'react'
import ChildComponent from './ChildComponent';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext=createContext("en");
export default function ParentComponent() {
  const [state, setState]=useState<string>("en")
    const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setState(e.target.value);
    }
  return (
    <div>
      <label htmlFor="">Ngon ngu hien tai: </label>
      <select value={state} name="language" id="" onChange={handleChange}>
        <option value="en">English</option>
        <option value="vn">Tieng Viet</option>
      </select>
      <LanguageContext.Provider value={state}>
        <ChildComponent></ChildComponent>
      </LanguageContext.Provider>
    </div>
  )
}
