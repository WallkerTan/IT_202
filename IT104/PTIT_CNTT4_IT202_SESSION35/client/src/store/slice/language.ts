import { createSlice } from "@reduxjs/toolkit";

const language = createSlice({
    name:"language",
    initialState:{
        lang:"en"
    },
    reducers:{
        change:(state,actions) => {
            state.lang = actions.payload
        }
    }
});
export const {change} = language.actions;
export default language.reducer
