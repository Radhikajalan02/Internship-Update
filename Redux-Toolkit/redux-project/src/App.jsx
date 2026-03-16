import './App.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByPayload} from './features/counter/counterSlice'
//Redux helps to manage state globally and solves the problem of props drilling by using a central store to manage,access and update states
// terms:
// 1)Action:wraps the event and the payload if any
// 2)Reducer:contains logic of the action for manipulating data
// 3)Store: contains the state,the data you want to manipulate and also the reducers
// 4)Slice:the logic of maintaining state for every feature is in slice,it contains the initial value of the state and the reducer function
// 5)State:data 
// read more in Store.js
function App() {

  const [amount,setAmount]=useState(0) //this is for the reset action
  const count=useSelector((state)=>state.counter.value) //useSelector to access the initial value from slice and useDispatch to dispatch the action from the slice 
  const dispatch= useDispatch()
  
 function handleIncrementClick(){
   dispatch(increment());
 }

 function handleDecrementClick(){
  dispatch(decrement());
 }
 
 function handleResetClick(){
  dispatch(reset());
 }
 function handleIncByAmtClick(){
dispatch(incrementByPayload(amount))
 }
  return (
    <>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <br/>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>- </button>
        <br/>
        <button onClick={handleResetClick}>Reset</button>
        <br/>
        <input type='Number' 
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=>setAmount(e.target.value)}/>
        <br/>
        <button onClick={handleIncByAmtClick}>Increment By Amount</button>
      </div>
    </>
  )
}

export default App
