// mục đích của hàm để tính toán trả về state mới dựa vào action
const  initialState = {
    count :0
}
export const reducerCounter : any = (state= initialState , action:any)=>{
    switch (action.type) {
        case "INCREMENT":
            state.count = state.count + 1;
            return {...state}
        case "GIAM":
            state.count = state.count - 1;
            return {...state}
        default:
            return state
    }
}