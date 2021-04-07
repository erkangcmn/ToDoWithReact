import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function getUserReducer(state = initialState.User, action) {
    switch (action.type) {
        case actionTypes.GETUSER:
            return action.payload
        default:
            return state;
    }
}

