import { combineReducers } from "redux";
import appReducer from "./appReducer";
import questionReducer from "./questionReducer";

export default combineReducers({
    app: appReducer,
    questions: questionReducer
});