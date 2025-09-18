const initialState = {
    say  : "rikkei academy"
}
export const changeState: any = (state = initialState , action:any) => {
    switch (action.type) {
        case "SAY":
            return {...state , say : "rikkei soft"};
        default:
            return state;
    }
}