import { GET_MEAL_BY_PARTICIPANT } from '../actions/types';

const initialState = {
  meals: [],
  meal: null,
  loading: true,
  error: {}
};

function mealsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MEAL_BY_PARTICIPANT:
      return {
        ...state,
        meals: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default mealsReducer;
