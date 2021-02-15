import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";
const noteReducer = (state = initialState.Note, action) => {
	switch (action.type) {
		case actionTypes.ADDNOTE:
			return [ ...state, action.payload ]
		default:
			return state
	}
}

export default noteReducer