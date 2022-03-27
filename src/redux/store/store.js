import { createStore } from "redux";
import { filterReducer } from "../reducers/filterReducers.js";

const store = createStore(filterReducer);

export default store;
