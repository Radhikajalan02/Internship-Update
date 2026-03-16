import { useState , useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput]=useState(0)

  function expensiveTask(num){
    console.log("inside expensive task")
    for(let i=0;i<=1000000000;i++){}
    return num*2
  }
  let doubleValue = useMemo(() => expensiveTask(input), [input]) ;

   //first value is the function which has expensive operation and the second value is dependency through which the value will be changed
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <div>
      Count:{count}
    </div>
    <input type='number' placeholder='enter number' value={input} onChange={(e)=>setInput(e.target.value)}></input>
    <div>
      Double:{doubleValue}
    </div>

    </>
  )
}

export default App
