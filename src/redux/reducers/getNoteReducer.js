import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function getNoteReducer(state = initialState.GetNote, action) {
	switch (action.type) {
		case actionTypes.GETNOTE:
			
			return action.payload
		default:
			return state
	}
}

