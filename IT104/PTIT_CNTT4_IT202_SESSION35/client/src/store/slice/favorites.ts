import { createSlice } from "@reduxjs/toolkit";


const favorits = createSlice({
    name:"favorits",
    initialState:{
        user : [
            {
                id:1,
                userName:"Nguyen Van A",
                status:false
            },
            {
                id:2,
                userName:"Nguyen Van B",
                status:false
            },
            {
                id:3,
                userName:"Nguyen Van C",
                status:false
            },
        ]
    },
    reducers:{
        changeStatue : (state,actions) => {
            const checkId =  state.user.findIndex(i => i.id === actions.payload)
            state.user[checkId].status = true
        }
    }
})
export const {changeStatue} = favorits.actions;
export default favorits.reducer