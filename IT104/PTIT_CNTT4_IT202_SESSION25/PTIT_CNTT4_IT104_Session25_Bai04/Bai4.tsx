import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register'

export default function Bai4() {
    const routes = createBrowserRouter([
        {
            path: "/register",
            element: <Register></Register>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
