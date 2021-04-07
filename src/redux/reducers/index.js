import { combineReducers } from 'redux'
import noteReducer from './noteReducer'
import getNoteReducer from "./getNoteReducer"
import getUserReducer from "./getUserReducer"

const reducers = combineReducers({
    noteReducer,
    getNoteReducer,
    getUserReducer
})

export default reducers