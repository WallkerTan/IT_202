import React, { useContext } from 'react'
import { LanguageContext } from './ParentComponent'
export default function ChildComponent() {
    const language=useContext(LanguageContext)
  return (
    <div>
      <h2>{language=="en" ? "Welcome": "Xin chao"}</h2>
    </div>
  )
}
