import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './slices/taskslice'

 export const store = configureStore({
    reducer:{
        tasks:tasksReducer
    }
})