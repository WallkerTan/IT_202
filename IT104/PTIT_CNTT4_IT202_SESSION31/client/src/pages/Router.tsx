import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main';

export default function Router() {
    const routes = createBrowserRouter([
        {
            path: "/list-post",
            element: <Main></Main>
        }
    ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
