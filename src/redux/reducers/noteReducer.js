import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function noteReducer(state = initialState.Note, action) {
	switch (action.type) {
		case actionTypes.NOTEOPERATION:
			
			if (state.some(e => e.id == action.payload.id) && action.payload.status == "delete") {
				var a = action.payload.id
				const res = state.filter(({
					id
				}) => !a.includes(id));
		
				return res
			} if(action.payload.status == "update"){
				console.log(action.payload)
			}else {
				return [...state, action.payload];
			}
		default:
			return state
	}
}

