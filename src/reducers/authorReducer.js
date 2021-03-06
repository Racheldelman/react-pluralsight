import * as types from '../actions/actionTypes';
import initalState from './InitialState';

export default function authorReducer(state = initalState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;

  }
}
