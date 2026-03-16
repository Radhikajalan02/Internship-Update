import {createContext} from 'react';
import { useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';
// useContext helps yo solve the issue of prop drilling
  // steps for useContext:1)create context 2)provide 3)pass value inside provider wrap 4)consume
 // step1:create context
 const UserContext= createContext();
// step2:wrap all the child inside a provider

   function App() {
    // step3:pass value
    const [user,setUser]= useState({name:"rads"});
  return (
    <>
    <UserContext.Provider value={user}>
      <ChildA/>

    </UserContext.Provider>
      
    </>
  )
}
// step4: consumer ke andar jake consume karlo
export default App
export {UserContext} //khudse export karna hoga to the consumer child and waha jake import karna hoga
