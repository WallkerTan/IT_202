import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCount";
import { reducerStudent } from "./ReducerStudent";
import { profile } from "./Profile";
import { randomNumber } from "./Random";
import { changeState } from "./ChangeState";
import { dark } from "./Dark";
import { account } from "./Register";



export const rootReducer = combineReducers({
    counter : reducerCounter,
    student: reducerStudent,
    infor:profile,
    numbRandom : randomNumber,
    change : changeState,
    dark2 :dark,
    register:account
})