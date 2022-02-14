import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  tasksList: tasksReducer,
});

export default rootReducer;
