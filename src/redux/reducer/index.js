import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

   
  export let rootReducer=combineReducers({todo:todoReducer})