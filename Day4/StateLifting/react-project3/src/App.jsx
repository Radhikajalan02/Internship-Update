import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync karwadenge
const [name,setName]=useState(''); //usestate in parent component helps in state lifting and also in syncing the states of siblings by shifting the responsibility to the parent for creating,managing and changing state
  return (
    <>
     <div>
     <Card title="card1" name={name} setName={setName}/>


     <Card title="card1" name={name} setName={setName}/>

     <p>i am inside parent component and the value of name is : {name}</p> //change in child component makes chane in parent component
     </div>
        
    </>
  )
}

export default App
