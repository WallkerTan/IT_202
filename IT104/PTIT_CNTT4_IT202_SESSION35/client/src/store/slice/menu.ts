import { createSlice } from "@reduxjs/toolkit";

const menu = createSlice({
    name:"menu",
    initialState:{
        flag:true
    },
    reducers:{
        handleClick : (state) => {
            state.flag = !state.flag
        }
    }
});
export const {handleClick} = menu.actions
export default menu.reducer 