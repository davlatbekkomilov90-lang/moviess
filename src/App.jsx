import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Public from './Layouts/public'
import HomePages from './pages/HomePages'
import DetailPages from './pages/DetailPages'
import FavoritesPages from './pages/FavoritesPages'

function App() {
  let routes =  createBrowserRouter([
    {
      path:"/",
      element:<Public/>,
      children:[
        {
          index: true,
          element:<HomePages/>,
        },
        {
          path: "DetailPage/:id",
          element:<DetailPages/>,
        },
        {
          path:"FavoritePage",
          element:<FavoritesPages/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
