import {createStore} from "redux"
import { rootReducer } from "./reduces/rootReducer"

export const store = createStore(rootReducer)