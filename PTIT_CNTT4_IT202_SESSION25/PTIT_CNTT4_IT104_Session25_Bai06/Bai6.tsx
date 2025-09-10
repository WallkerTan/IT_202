import React from 'react'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import './bai6.css'
export default function Bai6() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <>
            <nav>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/product"}>Product</NavLink>
                <NavLink to={"/detail"}>Detail</NavLink>
            </nav>
            <Outlet></Outlet>
            </>,
            children: [
                {
                    path: "/home",
                    element: <h1>Home</h1>
                },
                {
                    path: "/product",
                    element: <h1>Product</h1>
                },
                {
                    path: "/detail",
                    element: <h1>Detail</h1>
                },
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
