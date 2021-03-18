import { combineReducers } from 'redux'
import noteReducer from './noteReducer'
import getNoteReducer from "./getNoteReducer"

const reducers = combineReducers({
    noteReducer,
    getNoteReducer
})

export default reducers