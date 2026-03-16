import { useState } from 'react'
import './App.css'
import { useRef } from 'react'; //update or increment or changes in the value of useRef variable does not lead to any re render 
import { useEffect } from 'react';

function App() {
  const [count,setCount]=useState(0);
  let val=useRef(0); //useRef is  used so that a variable can persist its value even after re rendering
  
  let btnref=useRef();

  function handleIncrement(){
    val.current=val.current+1;
    console.log("value of val is",val.current)
    setCount(count+1)
  }
  useEffect(() => {
    console.log("im rendered again")
    }
  )
  function changeColor(){
    btnref.current.style.backgroundColor = "red";
  }
  

  return (
    <>
    <button ref={btnref} onClick={handleIncrement}>Increment</button>
     <br/>
     <button onClick={changeColor}>Change color of first button</button>
     <div>
      Count:{count}
     </div>
    </>
  )
}

export default App
