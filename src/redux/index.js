import { combineReducers } from "redux";
import addNoteReducer from "./reducers/addNoteReducer"

const rootReducer = combineReducers({
    addNoteReducer
});

export default rootReducer;