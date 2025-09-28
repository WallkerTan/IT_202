import { configureStore } from "@reduxjs/toolkit";
import book_slice from "./slices/bookSlice"
const store =configureStore({
    reducer:{
        books:book_slice
    }
})

export default store;