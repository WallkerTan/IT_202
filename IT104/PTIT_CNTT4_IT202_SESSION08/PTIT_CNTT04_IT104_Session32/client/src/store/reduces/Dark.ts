const initialState = {
    check : true
}
export const dark = (state = initialState , action:any) => {
    switch (action.type) {
        case "DARK":
            return {...state , check : !state.check}
        default:
            return state
    }
}