import { GET_STUDIES, SET_STUDY } from '../actions/types';

const initialState = {
  studies: [],
  study: null,
  loading: true,
  error: {}
};

function studiesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDIES:
      return {
        ...state,
        studies: payload,
        loading: false
      };
    case SET_STUDY:
      return {
        ...state,
        study: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default studiesReducer;
