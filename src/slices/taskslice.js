import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    tasklist:[],
    selectedtask:{},
    isLoading:false,
    error:''
} 

//GET
export const getTaskfromserver = createAsyncThunk("tasks/getTaskfromserver", async(_,{rejectWithValue})=>{
    const response = await fetch('http://localhost:8000/tasks')
    if(response.ok){
        const jsonResponse = await response.json()
        return jsonResponse
    }else {
         return rejectWithValue({error:'404 not found'})
    }
})


const taskslice = createSlice({
name:'taskslice',
initialState,
reducers:{
    addTaskToList:(state,action) =>{
        const id = Math.random() * 100
        let task = {...action.payload,id}
        state.tasklist.push(task)
    },
    removeTaskFromList:(state,action) =>{
        state.tasklist = state.tasklist.filter((task) => task.id !== action.payload.id)
    },
    updateTaskInList:(state,action) =>{
        state.tasklist = state.tasklist.map((task) => task.id === action.payload.id?action.payload:task)
    },
    setSelectedTask:(state,action) =>{
        state.selectedtask = action.payload
    }
}, 
extraReducers:(builder) =>{
    builder
    .addCase(getTaskfromserver.pending,(state) =>{
        state.isLoading = true
    })
    .addCase(getTaskfromserver.fulfilled,(state,action) =>{
        state.isLoading = false
        state.error=''
        state.tasklist = action.payload
    })
    .addCase(getTaskfromserver.rejected,(state,action) =>{
        state.error = action.payload.error
        state.isLoading = false
        state.tasklist = []
    })
}

}) 
export const{addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = taskslice.actions
export default taskslice.reducer