import * as actionTypes from './actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  if(action.type === actionTypes.SEARCH_SUCCESS) {
    return {
      ...state,
      results: action.payload
    }
  }

  if(action.type === actionTypes.CLEAR_CARDS) {
    return initialState;
  }
  
  return state;
};


export default reducer;
