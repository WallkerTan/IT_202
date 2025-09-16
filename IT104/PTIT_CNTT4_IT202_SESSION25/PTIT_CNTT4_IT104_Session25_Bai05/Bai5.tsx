import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'

export default function Bai5() {
    const routes = createBrowserRouter([
        {
            path: "*",
            element: <NotFound></NotFound>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
