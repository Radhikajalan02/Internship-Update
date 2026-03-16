import { useState , useCallback} from 'react'
import './App.css'
import Childcomp from './components/Childcomp'
//useCallback helps to prevent unnecessary re rendering of child components
function App() {
  const [count, setCount] = useState(0)

  
  let handleClick= useCallback(()=>{
    setCount(count+1);
  },[count]); //handleClick is now frozen if dependency is empty and when we pass count in the dependency array the function will be recreated and child component  will re-render when count is updated 

  // useCallback(
  //   () => {
  //     first
  //   },
  //   [second],
  // )
  

  return (
    <>
        <div>
           count:{count}
        </div>
        <br/>
      <div>
      <button onClick={handleClick}>
        Increment
      </button>
      </div>
      <br/>
      
      <div>
        <Childcomp buttonName='Click me'
        handleClick={handleClick}/>
      </div>
     
    </>
  )
}

export default App
