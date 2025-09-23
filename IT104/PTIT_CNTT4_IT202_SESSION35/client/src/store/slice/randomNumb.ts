import { createSlice } from "@reduxjs/toolkit";


const randomNumber = createSlice({
    name:"randomNumber",
    initialState:{
        arrNumber : []
    },
    reducers:{
        random : (state) => {
            const newNumber : number = Math.floor(Math.random() * 99);
            state.arrNumber.push(newNumber);
        }
    }
})

export const { random } = randomNumber.actions
export default randomNumber.reducer