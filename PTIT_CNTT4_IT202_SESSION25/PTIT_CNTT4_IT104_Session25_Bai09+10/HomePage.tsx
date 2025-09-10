import React from 'react'
type User={
  email: string,
  password: string,
}
export default function HomePage() {
    const user: User=JSON.parse(localStorage.getItem("currentUser") || "{}");
  return (
    <div>
      <h1>Home page</h1>
      <h2>Email: {user.email}</h2>
    </div>
  )
}
