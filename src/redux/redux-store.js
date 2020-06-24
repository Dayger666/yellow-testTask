import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware  from "redux-thunk";
import appReducer from "./App-reducer";


let reducers=combineReducers({
    appLoad:appReducer,
    form:formReducer,
});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));


export default store;