import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/PasteSlice";


export const store = configureStore({
    reducer:{
        paste:reducer,
    },
})