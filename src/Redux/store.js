import { combineReducers } from "redux";
import { createStore } from "redux";
import {login} from "./redusers/login";

const reducers = combineReducers({login})

const store = createStore(reducers);

export default store;
