import axios from 'axios';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const CLEAR_CARDS = 'CLEAR_CARDS';

const url = 'https://rickandmortyapi.com/api/character/?name=';

export const searchSuccessAction = (query) => async (dispatch, getState) => {
  try {
    if (!query) {
      throw new Error;  
    }
    const res = await axios.get(`${url}${query}`)
    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data.results
    })
  } catch (error) {
    dispatch({
      type: CLEAR_CARDS
    })
  }
};