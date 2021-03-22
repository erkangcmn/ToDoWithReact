import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function getNoteReducer(state = initialState.GetNote, action) {
	switch (action.type) {
		case actionTypes.GETNOTE:
			if (action.payload.id == state.id) {
				return state
			} else {
				return action.payload
			}

		default:
			return state
	}
}

