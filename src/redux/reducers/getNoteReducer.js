import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

export default function getNoteReducer(state = initialState.GetNote, action) {
	switch (action.type) {
		case actionTypes.GETNOTE:
			if (action.payload.id == state.id) {
				return state 
				/* 
					burada action.payload.id == state.id dedik statedeki veriyi dön yoksa bu veriyi gösterdiğimiz 
				    modalda herhangi bir yere tıklayınca veriyi yeniden çekiyor ve kullanıcının düzenlediği not siliniyor
				*/
			} else {
				return action.payload	//eşit değilse action.paylaadı dön dedik
			}

		default:
			return state
	}
}

