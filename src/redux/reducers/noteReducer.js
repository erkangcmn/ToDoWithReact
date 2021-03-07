import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function noteReducer(state = initialState.Note, action) {
	switch (action.type) {
		case actionTypes.ADDNOTE:
			if (state.some(e => e.title == action.payload.title)) {
				var a = action.payload.title
				const res = state.filter(({
					title
				}) => !a.includes(title));
		
				return res
			} else {
				return [...state, action.payload];
			}
		default:
			return state
	}
}

