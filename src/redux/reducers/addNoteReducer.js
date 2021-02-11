import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function arrNoteReducers(state = initialState.notes, action) {
  switch (action.type) {
    case actionTypes.ADDNOTE:
      return [...state, action.payload];

    default:
      return state;
  }
}
