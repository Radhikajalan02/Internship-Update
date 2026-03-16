import { useState } from 'react'

import './App.css'
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'
// conditional rendering can be done in 4 ways: if else; ternary operatot(?:); logical operatot(&&) and early return
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
   return(
    <div>
      {isLoggedIn ? <Logoutbtn/> : <Loginbtn/>}
    </div> //ternary operator
   )

  if(isLoggedIn){
    return(
      <Logoutbtn/>
    )
  }
  else{
    return(
      <Logoutbtn/>
    )
  }

   
  
}

export default App
