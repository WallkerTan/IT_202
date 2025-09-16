import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CustomLink() {
  return (
    <div>
      <NavLink to={"/homePage"}>Go to home page</NavLink>
    </div>
  )
}
