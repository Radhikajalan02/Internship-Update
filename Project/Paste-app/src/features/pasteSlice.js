import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 paste:localStorage.getItem("paste")
 ? JSON.parse(localStorage.getItem("paste"))
 : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      
    },
    updateToPaste: (state,action) => {
      
    },
    resetAllPaste: (state, action) => {
    
    },
    removeFromPaste:(state,action)=>{

    },
  },
})


export const {addToPaste,updateToPaste,resetAllPaste } = pasteSlice.actions

export default pasteSlice.reducer