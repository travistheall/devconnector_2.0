import { GET_PARTICIPANTS_BY_STUDY, SET_PARTICIPANT } from '../actions/types';

const initialState = {
  participants: [],
  participant: null,
  loading: true,
  error: {}
};

function participantsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PARTICIPANTS_BY_STUDY:
      return {
        ...state,
        participants: payload,
        loading: false
      };
    case SET_PARTICIPANT:
      return {
        ...state,
        participant: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default participantsReducer;
