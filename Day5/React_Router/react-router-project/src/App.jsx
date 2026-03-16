//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Param from './components/Param'

const router=createBrowserRouter(
  [ //it contains an array of all routes 
    {path:"/", 
    element: <div> //element field helps to add component
      <Navbar/>
      <Home/>
    </div>
    },//it means home route 

   {path:"/about", 
    element: <div>
      <Navbar/>
    <About/></div>
    },

    {path:"/dashboard", 
    element: <div>
      <Navbar/>
      <Dashboard/>
      </div>
    },
    {
      path:"/student/:id", //id is the route parameter or route parameter
      element:<div>
      <Navbar/>
      <Param/>
      </div>
    }
  ]
)
function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider> //gives context of the routes to the application
      <Navbar/>
    </>
  )
}

export default App
