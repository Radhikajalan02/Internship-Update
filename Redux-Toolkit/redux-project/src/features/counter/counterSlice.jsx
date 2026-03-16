import { createSlice } from "@reduxjs/toolkit";
// it has all the features that is it consists of all the reducer with the logic inside the reducer and the value of initial state
export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0 //to extract this value from here we need to use the useSelecter hook and write state.counter.value in this case
    },
    reducers:{
        increment: state=>{ //to execute this increment action we dispatch it 
            state.value+=1
        },
        decrement:state=>{
            state.value-=1
        },
        reset:state=>{
            state.value=0;
        },
        incrementByPayload: (state,action)=>{
            state.value+=action.payload
        }
    }
})

// here increment decrement reset and incrementByPayload are actions that the handler function is going to pass to the store after the trigger event is made

export const {increment, decrement, incrementByPayload,reset}=counterSlice.actions

export default counterSlice.reducer