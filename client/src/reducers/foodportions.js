import {
    GET_PORTIONS,
  } from '../actions/types';
  
  const initialState = {
    portions: [],
    portion: null,
    loading: true,
    error: {}
  };
  
  function foodPortionReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PORTIONS:
        return {
            ...state,
          portions: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  
  export default foodPortionReducer;
  