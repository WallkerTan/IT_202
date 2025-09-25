/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GETALL_STUDENT } from "../../apis/apis";
import type { Student } from "../../utils/types";

export const getAllStudent = createAsyncThunk("getAllUser", async () => {
  const res: any = await axios.get(API_GETALL_STUDENT);
  return res.data;
});

export const addStudent = createAsyncThunk(
  "addStudent",
  async (new_student: Student) => {
    const response = await axios.post("http://localhost:8080/students", new_student);
    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "deleteStudent",
  async (id: number) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    return id;
  }
);

export const updateStudent = createAsyncThunk(
  "updateStudent",
  async (student: Student) => {
    const response = await axios.put(
      `http://localhost:8080/students/${student.id}`, student);
    return response.data;
  }
);


const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [] as Student[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.loading = true;
        state.students = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s: Student) => s.id !== action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex((s: Student) => s.id === action.payload.id);
        if (index !== -1) state.students[index] = action.payload;
      });
  },
});

export default studentSlice.reducer;
