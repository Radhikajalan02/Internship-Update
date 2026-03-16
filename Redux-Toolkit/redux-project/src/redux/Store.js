import {configureStore} from '@reduxjs/toolkit'
// configure store helps to create a store
import reducer from '../features/counter/counterSlice'
//passed the name of the slice here which is counter
export const store =configureStore({
    reducer:{
       counter: reducer
    },
})
// Whole path - 
// UI trigger -> Action dispatch -> store -> reducer -> state update in store -> UI update 
// ex- button click -> handlefunc() -> store -> increment() -> num+1 in store -> num+1 in UI
// steps: 
// 1)create store in redux folder
// 2)wrap the app component under Provider
// 3)createSlice in features folder
// 4)create reducer in slice
//5) register the created reducer in store
// useSelector and useDispatch in app 