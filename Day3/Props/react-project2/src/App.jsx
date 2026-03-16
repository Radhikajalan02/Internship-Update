import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
    <Button handleClick={handleClick} text="click me">
      <h2>{count}</h2>
    </Button>


     <Card name="radhika"> //name is a prop
      <h1>okokooko</h1>
      <p>okok</p>
      <p>hi</p>
     </Card>
     <Card>
      <p>hiii</p>
     </Card>
     <Card children="me ek children hu"></Card> //children is a prop
    </>
  )
}

export default App
