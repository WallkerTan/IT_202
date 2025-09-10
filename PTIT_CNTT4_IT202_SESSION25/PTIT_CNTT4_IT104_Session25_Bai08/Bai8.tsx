import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetail from './UserDetail'
import ListUser from './ListUser'

export default function Bai8() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <ListUser></ListUser>
        },
        {
            path: "/user/:index",
            element: <UserDetail></UserDetail>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
