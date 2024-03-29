import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function noteReducer(state = initialState.Note, action) {
	switch (action.type) {
		case actionTypes.NOTEOPERATION:
				// some sayesinde true veya false kontrolü yaptık
			if (state.some(e => e.id == action.payload.id) && action.payload.status == "delete") { // delete note
				var deleteNote = action.payload.id
				const res = state.filter(({ id }) => !deleteNote.includes(id));
				return res

			} 
			if (action.payload.status == "update") { // update note
				var updateNote = state.map(note => {
					if (note.id == action.payload.id) { return action.payload } else { return note }
				});
				return updateNote
			} if(action.payload.status =="search"){
				return action.payload.data.data
				 
			}else {
				return [...state, action.payload];
			}
		default:
			return state
	}
}

