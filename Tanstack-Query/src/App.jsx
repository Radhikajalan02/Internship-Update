import "./App.css"
import "./index.css"
import React from 'react'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import MainLayout from './components/Layout/MainLayout'
import Home from './Pages/Home'
import FetchOld from './Pages/FetchOld'
import FetchRQ from './Pages/FetchRQ'
import { FetchIndv } from "./components/UI/FetchIndv"


const router= createBrowserRouter([ //routing paths define kardiye
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/trad",
        element:<FetchOld/>,
      },
      {
        path:"/rq",
        element:<FetchRQ/>,
      },
      {
        path:"/rq/:id",  //to creat dynamic routes we add ":" infront and while using it we use (``) backticks
        element:<FetchIndv/>,
      }
    ]
  }
])
const App = () => {
const queryClient=new QueryClient(); //it manages the caching,background fetching,data synchronization,and other query-related logic 
  return (
   //query client provider is used to provide a query client instance to the entire react app. it makes the client available via reacts context api so that all the components in the tree can use the useQuery,useMutation and other hooks proivded by react query
    <div className="App">
       <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </div>
  )
}

export default App