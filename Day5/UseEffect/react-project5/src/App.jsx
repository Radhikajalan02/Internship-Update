import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
// useeffect is a react hook that helps to generate side effects like DOM content connection with DB after loading or fetching of an api after rendering of a project
function App() {
  const [count, setCount] = useState(0)
  const[total,setTotal]=useState(1)
 //first-> side effect function
 //second->clean-up function
 //third-> comma separated dependency list

 //variation1:
 // //runs on every render-> 
 //useEffect(()=>{alert("i will run on each render")})

// variation2:runs on only the first render
// useEffect(() => {
//    alert("i only run once")
//   }, [])
function handleClick(){
  setCount(count+1)
 
}
function handleClickTotal(){
 setTotal(total+1)
}

  // variation3:
  // useEffect(() => {
  //   alert("i will run every time when count is updated")
    
  // }, [count])

  // variation4:Multiple dependencies
  // useEffect(() => {
  // alert("im working")  
  // }, [count,total])

  // variation5: lets add the cleanup function 
  // useEffect(() => {
  //   alert("using variation 5")
  
  //   return () => {
  //    alert("count is unmounted from ui")
  //   }
  // }, [count])

   
  
  
  
  return (
    <>
      <div>
        <button onClick={handleClick}>click me</button>
        <p>count is : {count}</p>
        <br></br>
        <button onClick={handleClickTotal}>click me</button>
        <p>total is: {total}</p>
      </div>
    </>
  )
}

export default App
