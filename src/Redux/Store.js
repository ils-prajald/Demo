import { combineReducers, createStore } from "redux";
import { Reducer } from './Reducer';
 
const rootReducer = combineReducers({
    Reducer,
});

export const store = createStore(rootReducer); 