import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'

export default function Bai1() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    }
  ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
