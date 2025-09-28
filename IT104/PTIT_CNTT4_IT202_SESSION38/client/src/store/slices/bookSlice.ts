import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Book } from "../../utils/type";
export const getAllBook = createAsyncThunk("getAllBook", async () => {
  try {
    const response = await axios.get("http://localhost:8080/books");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(response.data);
        },3000)
    })
  } catch (error) {
    console.log(error);
  }
});
export const addBook = createAsyncThunk(
  "addStudent",
  async (new_book: Book) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/books",
        new_book
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// xoa
export const deleBook = createAsyncThunk(
  "deleBook",
  async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
// sua
export const updateBook = createAsyncThunk("update", async (newBook: any) => {
  try {
    const res = await axios.put(
      `http://localhost:8080/books/${newBook.id}`,
      newBook
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    loading:true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
    .addCase(getAllBook.fulfilled, (state:any, action) => {
          state.loading=false;
      state.books = action.payload;
    })
    .addCase(getAllBook.pending, (state:any, action) => {
          state.loading=true;
    })
     .addCase(addBook.fulfilled, (state: any, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleBook.fulfilled, (state, action) => {
        state.books= state.books.filter(
          (book: any) => book.id !== action.payload
        );
      })
      .addCase(updateBook.fulfilled, (state: any, action) => {
        const index = state.books.findIndex(
          (item: any) => item.id == action.payload.id
        );
        state.books[index] = action.payload;
      });
  },
});
export default bookSlice.reducer;
