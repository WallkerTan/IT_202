import { createSlice } from "@reduxjs/toolkit";

export const darkAndLight = createSlice({
    name:"dark",
    initialState:{
        isDarkMode: true

    },
    reducers:{
        toggleTheme : (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})
export const {  toggleTheme } = darkAndLight.actions
export default darkAndLight.reducer