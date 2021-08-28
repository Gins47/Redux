import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePages/reducers";
const reducers = combineReducers({ homePage });

export default createStore(reducers);
