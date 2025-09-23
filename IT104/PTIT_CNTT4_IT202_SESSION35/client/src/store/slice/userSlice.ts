import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name:"student",
    initialState:{
        student:[
            {
                id:1,
                name:"Loc"
            },
            {
                id:2,
                name:"Dung"
            }
        ]
    },
    reducers:{
        addStudent : (state:any,action) => {
            state.student.push(action.payload)
        },
        deleStudent : (state:any , action) => {
            state.student = state.student.filter((i:any) => i.id !== action.payload.id);
        }
    }
})

//distrauctoring : phân rã 
export const { addStudent , deleStudent } = studentSlice.actions
export default studentSlice.reducer
