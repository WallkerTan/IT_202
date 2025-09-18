const initialState = {
    users:[
        {
        id:1,
        name:"Minh Thu",
        gender:"Nam",
        birth:"20/11/2023",
        address:"Thanh Xuan , Ha Noi"
        },
        {
        id:2,
        name:"Minh Duc",
        gender:"Nam",
        birth:"20/11/2023",
        address:"Thanh Xuan , Ha Noi"
        },
        {
        id:3,
        name:"Duc Dung",
        gender:"Nam",
        birth:"20/11/2023",
        address:"Thanh Xuan , Ha Noi"
        },
    ]
}
export const reducerStudent = (state = initialState , action : any) => {
    return state;
}