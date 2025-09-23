import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state) => {
            state.value+=1
        }, 
        apart:(state) => {
            state.value-=1
        },
        reset:(state) => {
            state.value = 0
        }
    }
})
// counterSlice.actions tra ve obj chua cac hanh dong
export const {increment , apart , reset} = counterSlice.actions
export default counterSlice.reducer;