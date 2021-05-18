import {
    SEARCH_FOODS,
  } from '../actions/types';
  
  const initialState = {
    foods: [],
    food: null,
    loading: true,
    error: {}
  };
  
  function foodReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SEARCH_FOODS:
        return {
            ...state,
          foods: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  
  export default foodReducer;
  