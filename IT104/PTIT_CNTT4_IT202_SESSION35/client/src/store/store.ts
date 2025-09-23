import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/couterSlice"
import student from "./slice/userSlice"
import random  from "./slice/randomNumb";
import  darkAndLight  from "./slice/darkAndLight";
import listMode from "./slice/listMode"
import  handleClick  from "./slice/menu";
import  change  from "./slice/language";
import  changeStatue  from "./slice/favorites";



export const store = configureStore({
    reducer: {
        counter,
        student,
        random,
        darkAndLight,
        listMode,
        handleClick,
        change,
        changeStatue
    }
})