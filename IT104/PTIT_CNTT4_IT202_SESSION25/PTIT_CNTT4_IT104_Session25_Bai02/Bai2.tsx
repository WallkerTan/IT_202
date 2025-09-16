import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Contact'

export default function Bai2() {
    const routes = createBrowserRouter([
        {
            path: "/contact",
            element: <Contact></Contact>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
