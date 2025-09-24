import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Task } from "../types/listType";
import axios from "axios";

export const getTasks = createAsyncThunk("getTasks", async ()=>{
    try {
        const response = await axios.get("http://localhost:8080/tasks");
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
export const addTask = createAsyncThunk("addTask", async (task: Task)=>{
    try {
        const response = await axios.post("http://localhost:8080/tasks", {...task, id: String(task.id)});
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
export const deleteTask = createAsyncThunk("deleteTask", async (id: number)=>{
    try {
        await axios.delete(`http://localhost:8080/tasks/${Number(id)}`);
        return id;
    } catch (error) {
        console.log(error);
    }
})
export const updateTask = createAsyncThunk("updateTask", async (task: Task)=>{
    try {
        const response = await axios.put(`http://localhost:8080/tasks/${task.id}`, task);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
export const toggleTask = createAsyncThunk("toggleTask", async (id: number)=>{
    try {
        const res = await axios.get(`http://localhost:8080/tasks/${id}`);
        await axios.patch(`http://localhost:8080/tasks/${id}`, {completed: !res.data.completed});
        return id
    } catch (error) {
        console.log(error);
    }
})
const initialState: Task[] = [];
export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getTasks.fulfilled, (state, action) => {
            return action.payload.map((task: Task) => ({
                ...task,
                id: Number(task.id)
            }));
        })
        .addCase(addTask.fulfilled, (state: Task[], action)=>{
            state.push(action.payload!);
        })
        .addCase(deleteTask.fulfilled, (state, action)=>{
            return state.filter((item) => item.id!=action.payload);
        })
        .addCase(updateTask.fulfilled, (state, action)=>{
            return state.map((item) => {return item.id==action.payload?.id ? action.payload : item});
        })
        .addCase(toggleTask.fulfilled, (state, action) => {
            return state.map((item) => {return item.id==action.payload ? {...item, completed: !item.completed} : item});
        })
    },
});

export default taskSlice.reducer;