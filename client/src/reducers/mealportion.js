import { ADD_MEAL_PORTION, GET_MEAL_PORTION, UPDATE_MEAL_PORTION } from '../actions/types';

const initialState = {
  mealPortions: [],
  mealPortion: null,
  loading: true,
  error: {}
};

function mealPortionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MEAL_PORTION:
      return {
        ...state,
        mealPortions: payload,
        loading: false
      };
    case GET_MEAL_PORTION:
      return {
        ...state,
        mealPortions: payload,
        loading: false
      };
      case UPDATE_MEAL_PORTION:
        return {
          ...state,
          mealPortions: payload,
          loading: false
        };
    default:
      return state;
  }
}

export default mealPortionReducer;
