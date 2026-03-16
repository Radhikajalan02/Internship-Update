import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App/>
    {/* wrap the app component into provider bcz we want to access all the state of all the created components for making the store centralized  */}
  </Provider> 
  </StrictMode>,
)
