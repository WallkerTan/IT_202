import { createSlice } from "@reduxjs/toolkit";

const listMode = createSlice({
    name:"listMode",
    initialState:{
        status:true
    },
    reducers:{
        compact : (state) => {
            state.status = !state.status
        }
    }
})

export const {compact} = listMode.actions
export default listMode.reducer